import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import {promisify} from 'util';
import execa from 'execa';
import Listr from 'listr';
import touch from 'touch';
import {projectInstall} from "pkg-install";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
    return copy(options.templateDirectory, options.targetDirectory, {
        clobber: false
    })
}

async function initGit(options) {
    const result = await execa('git', ['init'], {
        cwd: options.targetDirectory
    });
    touch(options.targetDirectory + '/.gitignore').then(
        fs.copyFile('gitignorefile.txt', options.targetDirectory + '/.gitignore', (err) => {
            if (err) {
                //TODO it's show unnecessary error! but the file would be copied
                //nothing
            }
            console.log('%s ignoring files has been copied to .gitignore', chalk.green.bold('COPIED'));
        })
    );
    if (result.failed) {
        return Promise.reject(new Error('Failed to initialize Git'))
    }
}

async function initDesignManagementSystem(options) {
    const result = await execa('npm', ['install',
        '@storybook/react',
        '@storybook/preset-create-react-app', '@storybook/node-logger', '@storybook/addon-links', '@storybook/addon-essentials',
        '@storybook/addon-actions', '--save-dev', '--force'
    ], {
        cwd: options.targetDirectory
    });
    if (result.failed) {
        return Promise.reject(new Error('Failed to initialize Storybook'))
    }
}

export async function createProject(options) {
    const framework = options.framework.toLowerCase();
    options = {
        ...options,
        targetDirectory: options.targetDirectory || process.cwd()
    };
    const currentFileUrl = import.meta.url;
    const templateDir = path.resolve(
        new URL(currentFileUrl).pathname,
        `../../templates/${framework}/`,
        options.template.toLowerCase()
    );
    options.templateDirectory = templateDir;

    try {
        await access(templateDir, fs.constants.R_OK);
    } catch (e) {
        console.log('%s Invalid template name', chalk.red.bold('ERROR'));
        process.exit(1);
    }

    const tasks = new Listr([
        {
            title: 'Copy Project Files',
            task: () => copyTemplateFiles(options),
        },
        {
            title: 'Initialize Git',
            task: () => initGit(options),
            enabled: () => options.git
        },
        {
            title: 'Install Dependencies',
            task: () => projectInstall({
                cwd: options.targetDirectory
            }),
            skip: () => !options.runInstall
        },
        {
            title: 'Initialize Wish Work Design System',
            task: () => initDesignManagementSystem(options),
            enabled: () => options.storybook
        }
    ]);

    await tasks.run();
    // console.log('%s Copy template files', chalk.green.bold('COPY'));
    // await copyTemplateFiles(options);
    console.log('%s Project ready', chalk.green.bold('DONE'));
    return true
}
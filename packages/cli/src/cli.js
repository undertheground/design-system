import arg from 'arg'
import inquirer from 'inquirer'
import {createProject} from "./main.js";


function parseArgumentIntoOptions(rawArgs) {
    const args = arg(
        {
            '--git': Boolean,
            '--yes': Boolean,
            '--framework': String,
            '-g': '--git',
            '-y': '--yes'
        },
        {
            argv: rawArgs.slice(2)
        }
    );
    return {
        skipPrompts: args['--yes'] || false,
        git: args['--git'] || false,
        framework: args['--framework'] || null,
        // storybook: args['--sb'] || false,
        // runInstall: args['--install'] || false
    }
}

async function promptForMissingOptions(options) {
    const defaultFrameWork = "React";
    if (options.skipPrompts) {
        return {
            ...options,
            template: options.template || defaultTemplate,
            framework: options.framework || defaultFrameWork
        };
    }

    let questions = [];
    if(options.framework === null ){
        questions.push({
            type: 'list',
            name: 'framework',
            message: 'Please choose your javascript framework',
            choices: ['React', 'Vue', 'Imba'],
            default: defaultFrameWork
        })
    }
    if (!options.git) {
        questions.push({
            type: 'confirm',
            name: 'git',
            message: 'Initialize a git repository?',
            default: false
        })
    }

    const answer = await inquirer.prompt(questions);
    return {
        ...options,
        git: options.git || answer.git,
        framework: options.framework || answer.framework
    }
}

export async function cli(args) {
    let options = parseArgumentIntoOptions(args);
    options = await promptForMissingOptions(options);
    await createProject(options)
}
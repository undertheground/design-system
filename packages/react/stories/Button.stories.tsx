import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonType } from '../src/Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
      
    },
};

const Template: Story <ButtonType> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'contained',
    children: 'Button'
} as ButtonType;

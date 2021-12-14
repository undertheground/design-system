import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldType } from '../src/TextField';

export default {
    title: 'Components/Input',
    component: TextField,
    argTypes: {
      
    },
  };

const Template: Story <TextFieldType> = args => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'outlined',
    label: 'Text Input'
} as TextFieldType;

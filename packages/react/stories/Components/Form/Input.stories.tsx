import React from 'react';
import { TextInput, InputProps } from '../../../src/Components/Form/Input'; 
import { Story } from '@storybook/react';



export default {
  title: 'Components/Form/Input',
  component: TextInput,
  argTypes: {

  }
};


const Template: Story <InputProps> = args => <TextInput {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    type: 'text',
    placeholder: 'User Name',
} as InputProps;
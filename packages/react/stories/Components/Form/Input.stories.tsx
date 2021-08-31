import React from 'react';
import { TextInput, TextInputProps } from '../../../src/Components/Form/Input'; 
import { Story } from '@storybook/react';



export default {
  title: 'Components/Form/Input',
  component: TextInput,
  argTypes: {

  }
};


const Template: Story <TextInputProps> = args => <TextInput {...args} />;

export const Input_Active = Template.bind({});
Input_Active.args = {
  title: 'User Name',
  name: 'UserName',
  placeholder: 'Exp: abas0098',
  size: 'medium',
} as TextInputProps;


export const Input_Disabled = Template.bind({});
Input_Disabled.args = {
    disabled: true,
    title: 'User Name',
    name: 'UserName',
    placeholder: 'Exp: abas0098',
    size: 'medium',
} as TextInputProps;

export const Input_With_Icon = Template.bind({});
Input_With_Icon.args = {
  title: 'User Name',
  name: 'UserName',
  placeholder: 'Exp: abas0098',
  size: 'medium',
  iconMode: 'with-icon',
  iconName: 'add'

} as TextInputProps;
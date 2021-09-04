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
  sizeType: 'medium',

} as TextInputProps;


export const Input_Disabled = Template.bind({});
Input_Disabled.args = {
    disabled: true,
    title: 'User Name',
    name: 'UserName',
    sizeType: 'medium',

} as TextInputProps;

export const Input_With_Left_Icon = Template.bind({});
Input_With_Left_Icon.args = {
  title: 'User Name',
  name: 'UserName',
  placeholder: 'Exp: abas0098',
  sizeType: 'medium',
  leftIconName:'search',

} as TextInputProps;

export const Input_With_Right_Icon = Template.bind({});
Input_With_Right_Icon.args = {
  title: 'User Name',
  name: 'UserName',
  placeholder: 'Exp: abas0098',
  sizeType: 'medium',
  rightIconName:'search',
} as TextInputProps;

export const Input_With_Both_Icon = Template.bind({});
Input_With_Both_Icon.args = {
  title: 'User Name',
  name: 'UserName',
  placeholder: 'Exp: abas0098',
  sizeType: 'medium',
  rightIconName:'add',
  leftIconName:'home',
} as TextInputProps;

export const Input_With_Error = Template.bind({});
Input_With_Error.args = {
  title: 'User Name',
  name: 'UserName',
  sizeType: 'medium',
  errorMsg: 'who the fuck are you!!',
  isError: true
} as TextInputProps;

export const Input_With_Both_Icon_With_Error = Template.bind({});
Input_With_Both_Icon_With_Error.args = {
  title: 'User Name',
  name: 'UserName',
  placeholder: 'Exp: abas0098',
  sizeType: 'medium',
  rightIconName:'add',
  leftIconName:'home',
  errorMsg: 'who the fuck are you!!',
  isError: true
} as TextInputProps;

export const Input_With_Success = Template.bind({});
Input_With_Success.args = {
  title: 'User Name',
  name: 'UserName',
  sizeType: 'medium',
  successMsg: 'oh it`s you!!',
  isSuccess: true
} as TextInputProps;

export const Input_With_Icon_With_Success = Template.bind({});
Input_With_Icon_With_Success.args = {
  title: 'User Name',
  name: 'UserName',
  sizeType: 'medium',
  successMsg: 'oh it`s you!!',
  isSuccess: true,
  rightIconName:'add',
  leftIconName:'home',
} as TextInputProps;


export const Input_With_helper = Template.bind({});
Input_With_helper.args = {
  title: 'User Name',
  name: 'UserName',
  sizeType: 'medium',
  helperMsg: "I'm the helper msg !!",
  showhelp: true,

} as TextInputProps;


let count
export const Input_With_Counter = Template.bind({});
Input_With_Counter.args = {
  title: 'User Name',
  name: 'UserName',
  sizeType: 'medium',
  maxCount:20,
  hasCounter: true,
  value: count
} as TextInputProps;

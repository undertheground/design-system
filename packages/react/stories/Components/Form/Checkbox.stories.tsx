import React from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox, CheckBoxProps } from '../../../src/Components/Form/Checkbox'; 


const onChange = action('change');

export default {
  title: 'forms/Checkbox',
  component: Checkbox,
};

export const Template = (args) => <Checkbox {...args} />;
Template.args = { label: 'Wish Checkbox', hideLabel: false };
Template.story = { name: 'Playground' };

export const All = () => (
  <form>
    <Checkbox id="Unchecked" label="Option" hideLabel  />
    <Checkbox id="Checked" label="Option" hideLabel />
    <Checkbox
      id="With-label-and-error"
      label="Option1"
      error="Ooooops!!"
    />
    <Checkbox id="With-label" label="Option"  />
    <Checkbox
      id="With-label"
      label="Secondary"
    />
    <Checkbox  id="With-label" label="Secondary"  />
  </form>
);

export const Unchecked = Template.bind({});
Unchecked.args = {
     id: 'Unchecked', 
     label: 'Option1', 
    }as  CheckBoxProps;

export const Checked = Template.bind({});
Checked .args ={
    id: 'Checked', 
    label: 'Option2', 
    checked: true
 }as  CheckBoxProps;



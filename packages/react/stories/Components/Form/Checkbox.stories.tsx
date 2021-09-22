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
    <Checkbox id="Unchecked" label="Option" hideLabel onChange={onChange} />
    <Checkbox id="Checked" label="Option" hideLabel checked onChange={onChange} />
    <Checkbox
      id="With-label-and-error"
      label="Option1"
      onChange={onChange}
      error="Ooooops!!"
    />
    <Checkbox id="With-label" label="Option" onChange={onChange} />
    <Checkbox
      appearance="secondary"
      id="With-label"
      label="Secondary"
      checked
      onChange={onChange}
    />
    <Checkbox appearance="secondary" id="With-label" label="Secondary" onChange={onChange} />
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



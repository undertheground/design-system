import React from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox, CheckBoxProps } from '../../../src/Components/Form/Checkbox'; 


const onChange = action('change');

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
};

export const Template = (args) => <Checkbox {...args} />;
Template.args = { label: 'Wish Checkbox', hideLabel: false };
Template.story = { name: 'Playground' };

export const All = () => (
  <div>
    <Checkbox id="1" label="Option 1"  />
    <Checkbox id="2" label="Option 2"  />
    <Checkbox
      id="3"
      label="Option 3"
      error="Ooooops!!"
    />
    <Checkbox id="4" label="Option 4"  />
    <Checkbox
      id="5"
      label="Option 5"
    />
    <Checkbox  id="6" label="Option 6"  />
  </div>
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



import React from 'react';
import { action } from '@storybook/addon-actions';
import { Radio } from '../../../src/Components/Form/Radio';


const onChange = action('change');

export default {
  title: 'forms/Radio',
  component: Radio,
};

export const Template = (args) => <Radio {...args} />;
Template.args = { label: 'label', hideLabel: false };
Template.story = { name: 'Playground' };

export const All = () => (
  <div>
    <Radio id="Option one" label="1" value="1"  />
    <Radio id="Option two" label="2" value="2"  />
    <Radio id="Option three" label="3" value="3"/>
    
  </div>
);

export const Unchecked = Template.bind({});
Unchecked.args = { id: '5', label: '5', hideLabel: true, value: '6' };

export const Checked = Template.bind({});
Checked.args = {
  id: 'Option one',
  label: 'Option one',
  hideLabel: true,
  value: 'Option one',
  checked: true,
};
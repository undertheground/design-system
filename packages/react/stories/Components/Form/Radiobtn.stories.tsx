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
  <form>
    <Radio id="Option one" label="1" value="1"  />
    <Radio id="Option two" label="2" value="2"  />
    <Radio id="3" label="3" error="Oooops!" />
    <Radio id="4" label="4" description="15 canines" value="4"  />
    <Radio id="5" label="5" value="5" />
    <Radio id="6" label="6" value="6" />
  </form>
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
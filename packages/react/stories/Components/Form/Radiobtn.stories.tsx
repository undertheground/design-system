import React from 'react';
import { action } from '@storybook/addon-actions';
import { Radio } from '../../../src/Components/Form/Radio';


const onChange = action('change');

export default {
  title: 'Form/Radio',
  component: Radio,
};

export const Template = (args) => <Radio {...args} />;
Template.args = { label: 'label', hideLabel: false };
Template.story = { name: 'Playground' };

export const All = () => (
  <form>
    <Radio id="Option-one" label="1111" groupName={'radio-grp'} />
    <Radio id="Option-two" label="2222" groupName={'radio-grp'} />
    <Radio id="Option-three" label="3333" groupName={'radio-grp'} />
    
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
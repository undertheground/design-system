import React from 'react';
import { Checkbox, CheckBoxProps } from '../../../src/Components/Form/Checkbox'; 
import { Story } from '@storybook/react';

export default {
    title: 'Components/Form/Checkbox',
    component: Checkbox,
    argTypes: {
  
    }
};

const Template: Story <CheckBoxProps> = args => <Checkbox {...args} />;

export const Checkbox_Active = Template.bind({});
Checkbox_Active.args = {
label:'salam'

} as CheckBoxProps;



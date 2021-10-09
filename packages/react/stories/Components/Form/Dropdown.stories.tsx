import React from 'react';
import { Dropdown, DropdownProps } from '../../../src/Components/Form/Dropdown'; 
import { Story } from '@storybook/react';



export default {
  title: 'Form/Dropdown',
  component: Dropdown,
};

export const Template: Story <DropdownProps> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: 'test',
} as DropdownProps;
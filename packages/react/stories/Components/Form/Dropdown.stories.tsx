import React from 'react';
import { Dropdown, DropdownProps } from '../../../src/Components/Form/Dropdown'; 
import { Story } from '@storybook/react';



export default {
  title: 'Form/Dropdown',
  component: Dropdown,
};

const Template: Story <DropdownProps> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: 'test',
    items: [
      {
        text: 'test 1',
        value: 'test 1'
      },
      {
        text: 'test 2',
        value: 'test 2'
      },
      {
        text: 'test 3',
        value: 'test 3'
      }
    ]
} as DropdownProps;
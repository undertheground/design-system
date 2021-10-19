import React from 'react';
import {
  DropdownForSidenav,
  DropdownProps,
} from '../../src/Components/DropdownForSidenav';
import { Story } from '@storybook/react';

export default {
  title: 'Components/DropdownForSidenav',
  component: DropdownForSidenav,
};

const Template: Story<DropdownProps> = (args) => (
  <DropdownForSidenav {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: 'test',
  placeholder:'Components',
  children: (
    <ul style={{listStyleType:'none',padding:`0`,margin:`0`}}>
      <li>Accordion</li>
      <li>Button</li>
      <li>Checkbox</li>
    </ul>
  ),
} as DropdownProps;

import React from 'react';
import {Divider,DividerProps  } from '../../src/Components/Divider'; 
import { Story } from '@storybook/react';



export default {
  title: 'Components/Divider',
  component: Divider,
};

export const Template: Story <DividerProps> = (args) => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    darkMode:false
} as DividerProps;
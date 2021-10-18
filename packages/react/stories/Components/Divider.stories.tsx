import React from 'react';
import { Divider } from '../../src/Components/Divider'; 
import { Story } from '@storybook/react';



export default {
  title: 'Components/Divider',
  component: Divider,
};

export const Template: Story = () => <Divider />;

export const Primary = Template.bind({});

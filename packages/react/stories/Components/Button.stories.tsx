import React from 'react';
import { Button, ButtonProps} from '../../src/Components/Button'; 
import { Story } from '@storybook/react';



export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    
  },
};

const Template: Story <ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    kind: 'primary',
    sizeType: 'medium',
    children: 'Button'
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
    kind: 'secondary',
    sizeType: 'medium',
    children: 'Button'
} as ButtonProps;


export const Ghost = Template.bind({});
Ghost.args = {
    kind: 'ghost',
    sizeType: 'medium',
    children: 'Button'
} as ButtonProps;

export const Primary_Disabled = Template.bind({});
Primary_Disabled.args = {
    disabled: true,
    kind: 'primary',
    sizeType: 'medium',
    children: 'Button',
} as ButtonProps;

export const Secondary_Disabled = Template.bind({});
Secondary_Disabled.args = {
    disabled: true,
    kind: 'secondary',
    sizeType: 'medium',
    children: 'Button',
} as ButtonProps;

export const Ghost_Disabled = Template.bind({});
Ghost_Disabled.args = {
    disabled: true,
    kind: 'ghost',
    sizeType: 'medium',
    children: 'Button',
} as ButtonProps;

export const Primary_Loading = Template.bind({});
Primary_Loading.args = {
    kind: 'primary',
    sizeType: 'medium',
    children: 'Button',
    isLoading: true,
} as ButtonProps;

export const Secondary_Loading = Template.bind({});
Secondary_Loading.args = {
    isLoading: true,
    kind: 'secondary',
    sizeType: 'medium',
    children: 'Button',
    
} as ButtonProps;


export const Ghost_Loading = Template.bind({});
Ghost_Loading.args = {
    kind: 'ghost',
    sizeType: 'medium',
    children: 'Button',
    isLoading: true,
} as ButtonProps;

export const Primary_With_Icon = Template.bind({});
Primary_With_Icon.args = {
    kind: 'primary',
    sizeType: 'small',
    children: 'Button',
    iconMode: 'with-icon',
    iconName: 'add'
} as ButtonProps;

export const Secondary_With_Icon = Template.bind({});
Secondary_With_Icon.args = {
    kind: 'secondary',
    sizeType: 'small',
    children: 'Button',
    iconMode: 'with-icon',
    iconName: 'add'
} as ButtonProps;

export const Ghost_With_Icon = Template.bind({});
Ghost_With_Icon.args = {
    kind: 'ghost',
    sizeType: 'small',
    children: 'Button',
    iconMode: 'with-icon',
    iconName: 'add'
} as ButtonProps;

export const Primary_Icon_Only = Template.bind({});
Primary_Icon_Only.args = {
    kind: 'primary',
    sizeType: 'medium',
    children: 'Button',
    iconMode: 'icon-only',
    iconName: 'home'
} as ButtonProps;

export const Secondary_Icon_Only = Template.bind({});
Secondary_Icon_Only.args = {
    kind: 'secondary',
    sizeType: 'medium',
    children: 'Button',
    iconMode: 'icon-only',
    iconName: 'home'
} as ButtonProps;

export const Ghost_Icon_Only = Template.bind({});
Ghost_Icon_Only .args = {
    kind: 'ghost',
    sizeType: 'medium',
    children: 'Button',
    iconMode: 'icon-only',
    iconName: 'home'
} as ButtonProps;




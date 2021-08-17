import React from 'react';
import { Button, ButtonProps, ButtonPropsWithoutChildren } from '../../src/Components/Button'; 
import { Story } from '@storybook/react';
// import {MouseEvent, PropsWithChildren} from 'react';
import VectorGhost from '../public/VectorGhost.svg';
import VectorPrimary from '../public/VectorPrimary.svg';
import VectorSecondary from '../public/VectorSecondary.svg';


// type OnClickAdapter<E extends HTMLElement> = (event: MouseEvent<E>) => void

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    
  },
};

// interface Props {
//     kind: 'primary' | 'secondary' | 'ghost',
//     icon?: 'with-icon' | 'icon-only',
//     size: 'small' | 'medium' | 'large',
//     // disabled?: boolean,
//     children: string,
//     onClick(): OnClickAdapter<HTMLButtonElement>,
// }


const Template: Story <ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    kind: 'primary',
    size: 'medium',
    children: 'Button'
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
    kind: 'secondary',
    size: 'medium',
    children: 'Button'
} as ButtonProps;


export const Ghost = Template.bind({});
Ghost.args = {
    kind: 'ghost',
    size: 'medium',
    children: 'Button'
} as ButtonProps;

export const Primary_Disabled = Template.bind({});
Primary_Disabled.args = {
    disabled: true,
    kind: 'primary',
    size: 'medium',
    children: 'Button',
} as ButtonProps;

export const Secondary_Disabled = Template.bind({});
Secondary_Disabled.args = {
    disabled: true,
    kind: 'secondary',
    size: 'medium',
    children: 'Button',
    style:{},
    className:'abas'
} as ButtonProps;

export const Ghost_Disabled = Template.bind({});
Ghost_Disabled.args = {
    disabled: true,
    kind: 'ghost',
    size: 'medium',
    children: 'Button',
    style:{},
    className:'abas'
} as ButtonProps;

export const Primary_Loading = Template.bind({});
Primary_Loading.args = {
    kind: 'primary',
    size: 'medium',
    children: 'Button',
    isLoading: true,
} as ButtonProps;

export const Secondary_Loading = Template.bind({});
Secondary_Loading.args = {
    isLoading: true,
    kind: 'secondary',
    size: 'medium',
    children: 'Button',
    
} as ButtonProps;


export const Ghost_Loading = Template.bind({});
Ghost_Loading.args = {
    kind: 'ghost',
    size: 'medium',
    children: 'Button',
    isLoading: true,
} as ButtonProps;

export const Primary_With_Icon = Template.bind({});
Primary_With_Icon.args = {
    kind: 'primary',
    size: 'medium',
    children: 'Button',
    iconMode: 'with-icon',
    iconSrc: VectorPrimary
} as ButtonProps;

export const Secondary_With_Icon = Template.bind({});
Secondary_With_Icon.args = {
    kind: 'secondary',
    size: 'medium',
    children: 'Button',
    iconMode: 'with-icon',
    iconSrc: VectorSecondary
} as ButtonProps;

export const Ghost_With_Icon = Template.bind({});
Ghost_With_Icon.args = {
    kind: 'ghost',
    size: 'medium',
    children: 'Button',
    iconMode: 'with-icon',
    iconSrc: VectorGhost
} as ButtonProps;

export const Primary_Icon_Only = Template.bind({});
Primary_Icon_Only.args = {
    kind: 'primary',
    size: 'medium',
    children: 'Button',
    iconMode: 'icon-only',
    iconSrc: VectorPrimary
} as ButtonProps;

export const Secondary_Icon_Only = Template.bind({});
Secondary_Icon_Only.args = {
    kind: 'secondary',
    size: 'medium',
    children: 'Button',
    iconMode: 'icon-only',
    iconSrc: VectorSecondary
} as ButtonProps;

export const Ghost_Icon_Only = Template.bind({});
Ghost_Icon_Only .args = {
    kind: 'ghost',
    size: 'medium',
    children: 'Button',
    iconMode: 'icon-only',
    iconSrc: VectorGhost
} as ButtonProps;



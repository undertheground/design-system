import React from 'react';
import { Button, ButtonProps, ButtonPropsWithoutChildren } from '../../src/Components/Button';
import { Story } from '@storybook/react'
import {MouseEvent, PropsWithChildren} from 'react'



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


<Button kind={'primary'} children={'abas'} disabled={true} className={'abas'} style={{backgroundColor: 'black'}} /> 
import React from 'react'
import styled from 'styled-components'
import { MouseEvent, PropsWithChildren } from 'react'
import colors from '@undertheground/color';


const SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
  } as const;

type OnClickAdapter<E extends HTMLElement> = (event: MouseEvent<E>) => void

export type InputPropsWithoutChildren = {
    type?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    isLoading?: boolean; 

    className?: string;
    style?: object;
    placeholder?: string;
    onChange?: OnClickAdapter<HTMLButtonElement>;
    size?: typeof SIZES[keyof typeof SIZES];
    
}


export const StyledDiv = styled.div<InputPropsWithoutChildren>`
font-family: "Mukta",
  
position: relative;  

${(props) => {
    switch (props.size) {
        case SIZES.LARGE:
            return (`
            input,
            select {
            padding: 0.313rem 0.938rem;
            height: 2.5rem;
            width: 27.5rem;
            font-size: 1rem;
            color: ${colors.grey[9]};
            background-color: transparent;
            border: 1px solid #016BB9;
            border-radius: 2px;
            outline: none;
            }
            `)

        default:
            return (`
            input,
            select {
            padding: 0.313rem 0.938rem;
            height: 2.5rem;
            width: 27.5rem;
            font-size: 1rem;
            color: ${colors.grey[9]};
            background-color: transparent;
            border: 1px solid #016BB9;
            border-radius: 2px;
            outline: none;
            }
            `)




    }
}}


input + label,
select + label {
position: absolute;
font-family: "Mukta";
top: 0rem;
left: 0.938rem;
padding: 0px 10px 0px 10px;
color: ${colors.grey[9]};
font-size: 90%;
background-color: ${colors.grey[1]};
opacity: 1;
visibility: visible;
transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
input:placeholder-shown + label,
select:placeholder-shown + label {
transform: translateY(10px) scale(0.51);
opacity: 0;
visibility: hidden;
}

.box-item-title {
    margin-left: 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #black;
  }

  
`

export type InputProps = PropsWithChildren<InputPropsWithoutChildren>;


export const TextInput = (props: InputProps) => {
    return (
        <StyledDiv >
            <input type={props.type} placeholder={props.placeholder} />
            <label className={'box-item-title'}>{props.placeholder}</label>

        </StyledDiv>

    )
}
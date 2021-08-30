import React from 'react'
import styled from 'styled-components'
import { MouseEvent } from 'react'
import colors from '@undertheground/color';


const SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
  } as const;

type OnClickAdapter<E extends HTMLElement> = (event: MouseEvent<E>) => void

export type TextInputProps = {
    title: string;
    name?: string;
    type?: 'string' |'number';
    id?: string;
    required?: boolean;
    disabled?: boolean;
    isLoading?: boolean; 
    inputClassName?: string;
    lableClassName?: string;
    style?: object;
    onChange?: OnClickAdapter<HTMLButtonElement>;
    size?: typeof SIZES[keyof typeof SIZES];
    
}



export const StyledDiv = styled.div`
font-family:"Mukta Vaani";
display:grid;
position:relative;


input:not(:placeholder-shown) + span{
    color: ${colors.grey[3]};
    transform: translateY(-0.5rem);
    background: ${colors.white};
    text-align: center;
    margin-left: 1.5rem;
    transition-duration:350ms;
    font-size: 0.825rem;
    visibility: visible;
    
}

input:hover + span {
    color: ${colors.blue[3]};
}

input:focus + span {
    display:flex;    
    color: ${colors.blue[3]};
    transform:translateY(-0.5rem);
    background:${colors.white};
    text-align:center;
    margin-left:1.5rem;
    font-size: 0.825rem; 
    visibility: visible;
    transition-duration:350ms;
}



`

export const StyledInput = styled.input`
  
font-size: 1rem;
width:100%; 
outline:none;
padding: 0.313rem 2rem;
height: 2.5rem;
width: 27.5rem;
font-size: 1rem;
background-color: transparent;
border: 0.125rem solid ${colors.grey[2]};
border-radius: 0.1rem;
outline: none;
transition-duration:300ms;

:hover, :focus {
    border-color: ${colors.blue[3]};
    
}



:hover::placeholder {
    color: ${colors.blue[3]};
}

:focus::placeholder {
    visibility: hidden;
}

`

export const StyledSpan= styled.span`
color: ${colors.grey[3]};
margin-left: 1.5rem;
cursor: text;
font-size:1rem;
border-left:0.5rem solid white;
border-right:0.5rem solid white;
border-bottom:0px;
position:absolute;
visibility: hidden;
`


export const TextInput = (props: TextInputProps) => {
    console.log(props)

    return (
        <StyledDiv>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>    
            
            <StyledInput 
            className={props.inputClassName}
            type={props.type}
            placeholder={props.title}
            id={props.id}
            disabled={props.disabled}
            />

            <StyledSpan
            className={props.lableClassName}>
                {props.title}</StyledSpan>
            
        </StyledDiv>

    )
}




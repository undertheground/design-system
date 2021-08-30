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
    className?: string;
    style?: object;
    placeholder?: string;
    onChange?: OnClickAdapter<HTMLButtonElement>;
    size?: typeof SIZES[keyof typeof SIZES];
    
}



export const StyledDiv = styled.div`

display:flex;
width: 100%;
position:relative;

input:not(:placeholder-shown) + span{
    color: ${colors.blue[3]};
    transform:translateY(-8px);
    background:${colors.white};
    text-align:center;
    margin-left:30px;
    font-size: 0.825rem;
    
}

input::not(:focus):not(:hover) + span{
    color: ${colors.grey[3]};
    transform:translateY(-8px);
    background:${colors.white};
    text-align:center;
    margin-left:30px;
    font-size: 0.825rem;
    
}


`

export const StyledInput = styled.input`
  
border:1px solid ${colors.grey[3]};
font-size: 1rem;
width:100%;
padding:20px 40px; 
outline:none;

padding: 0.313rem 0.938rem;
height: 2.5rem;
width: 27.5rem;
font-size: 1rem;
background-color: transparent;
border: 1px solid ${colors.grey[3]};
border-radius: 2px;
outline: none;

:hover, :focus {
    border-color: ${colors.blue[3]};
}




`

export const StyledSpan= styled.span`

cursor: text;
position:absolute;
top:-5px;
left:0;
transform:translateY(0px);
font-size:0.925rem;
transition-duration:300ms;
margin-left:34px;
border-left:6px solid white;
border-right:6px solid white;
border-bottom:0px;

`


export const TextInput = (props: TextInputProps) => {
    console.log(props)

    return (
        <StyledDiv style={props.style} className={props.className}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>    
            
            <StyledInput type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            disabled={props.disabled}
            />

            <StyledSpan >{props.title}</StyledSpan>
            
        </StyledDiv>

    )
}




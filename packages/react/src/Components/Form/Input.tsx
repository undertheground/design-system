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
    type?: 'string' |'number';
    id?: string;
    required?: boolean;
    disabled?: boolean;
    isLoading?: boolean; 

    className?: string;
    style?: object;
    placeholder: string;
    onChange?: OnClickAdapter<HTMLButtonElement>;
    size?: typeof SIZES[keyof typeof SIZES];
    
}



export const StyledDiv = styled.div`
  
`

export const StyledInput = styled.input`
  
`

export const StyledLabel= styled.label`

`


export const TextInput = (props: TextInputProps) => {
    console.log(props)

    return (
        <StyledDiv style={props.style} className={props.className}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>    
            
            <label >
                <input type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                disabled={props.disabled}
                />

                <span >{props.placeholder}</span>
            </label>
        </StyledDiv>

    )
}




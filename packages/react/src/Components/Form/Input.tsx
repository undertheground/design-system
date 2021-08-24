import React from 'react'
import styled from 'styled-components'


export type InputType = {
    id?: string,
    required?: boolean,
    disabled?: boolean,
    isLoading?: boolean, 
    className?: string, 
    style?: object,
}


export const StyledInput = styled.input<InputType>`
    
`


export const Input = (props: InputType) => {
    return (
    <StyledInput
        id={props.id}
        style={props.style}
        className={props.className}
        disabled={props.disabled}
        isLoading={props.isLoading}
          {...props}
        />
        
    )
}
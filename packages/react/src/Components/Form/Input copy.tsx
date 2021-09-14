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

font-family: 'Mukta Vaani', sans-serif;

display:flex;

width: 100%;
margin-bottom:15px;
position:relative;


input{
    border:1px solid ${colors.grey[3]};
    font-size: 1rem;
    width:100%;
    padding:20px 40px; 
    outline:none;
}

input::placeholder{
    opacity:0;
}


input:hover,
select {
    border-color: ${colors.blue[3]};
} 



input:focus{
    border-color: ${colors.blue[3]};
} 


span{
    cursor: text;
    position:absolute;
    top:-5px;
    left:0;
    transform:translateY(20px);
    font-size:0.925rem;
    transition-duration:300ms;
    margin-left:34px;
    border-left:6px solid white;
    border-right:6px solid white;
    border-bottom:0px;
    color: ${colors.grey[3]};
    
}



label:focus-within > span,
input:not(:placeholder-shown) + span{
    color: ${colors.blue[3]};
    transform:translateY(-8px);
    background:${colors.white};
    text-align:center;
    margin-left:30px;
    font-size: 0.825rem;
    
}

input:not(:placeholder-shown):not(:focus):not(:hover) + span{
    color: ${colors.grey[3]};
    transform:translateY(-8px);
    background:${colors.white};
    text-align:center;
    margin-left:30px;
    font-size: 0.825rem;
    
}
  
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




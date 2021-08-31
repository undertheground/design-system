import React from 'react'
import styled from 'styled-components'
import { MouseEvent } from 'react'
import colors from '@undertheground/color';


const SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}as const;

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
    
}& IconMode;

declare type IconMode = {
    iconMode?: 'without-icon'
  } | {
    iconMode: 'with-icon' | 'with-two-icon',
    iconName: string,
}


export const StyledDiv = styled.div`
font-family:"Mukta Vaani";
font-weight: 400;
display:flex;
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
height: 2.2rem;
font-size: 1rem;
background-color: transparent;
border: 0.12rem solid ${colors.grey[2]};
border-radius: 0.2rem;
outline: none;
transition-duration:300ms;
width: 24rem;
/* padding: ${(props) => 
  (props.size === SIZES.LARGE
    ?
    '0 4.063rem'
    :
    props.size === SIZES.SMALL
    ?
    '0 2.438rem'
    :
    '0 3.25rem' // SIZES.MEDIUM (Default value for undefind size)
)}; */

:hover, :focus {
    border-color: ${colors.blue[3]};
    
}

::placeholder {
    color: ${colors.grey[3]};
    font-family:"Mukta Vaani";
    font-weight: 400;
}

:hover::placeholder {
    color: ${colors.blue[3]};
}

:focus::placeholder {
    visibility: hidden;
}

${(props) =>{
    if (!props.disabled) return ''
    return(
        `
        cursor: not-allowed;   
        :hover{
            border-color: ${colors.grey[2]};
        }
        :hover::placeholder{
            color: ${colors.grey[3]};
        }
        `
    )
}}



/* ${(props) =>{
    switch (props.size) {
        case SIZES.SMALL:
            return(`
                 width: 16rem; 
            `)
    }
}} */


`

export const InputIcon = styled.div`
position: absolute;
padding: 0.8rem;
padding-left: 0.4rem;
color: ${colors.grey[3]};

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

            <>

                {props.iconMode === 'with-icon'


                ?
                
                    <>
                    <StyledSpan
                    className={props.lableClassName}>
                    {props.title}
                    </StyledSpan>
    
                            
                    <InputIcon>
                        <>
                            <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"rel="stylesheet"/>
                            <span className={'material-icons-outlined'}>{props.iconName}</span>
                        </>
                    </InputIcon>

                    </>

                :

                    <StyledSpan
                    className={props.lableClassName}>
                    {props.title}
                    </StyledSpan>


                }
            </>
            
        </StyledDiv>
    
    );
}




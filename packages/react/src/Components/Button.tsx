import React from 'react'
import {MouseEvent, PropsWithChildren} from 'react'
import styled from 'styled-components';

const COLOR ={
  $WHITE:'#fff',
  $SEXY_PINK: '#d1036f',
  $MAROON: '#BE0064',
  $JAZZ_BERRY:'#90004C',
  $WISH_BLUE: '#1C5BC2',
  $GRAY10: '#F5F5F5',
  $GRAY15:'#F5F5F5',
  $GRAY20:'#BFBFBF',
  $SAPPHIRE: '#1A53AE',
  $DARK_CORNFLOWER_BLUE: '#16438B',

}

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const KIND = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
}

const ICON = {
  WITHOUT_ICON: 'without-icon',
  WITH_ICON: 'with-icon',
  ICON_ONLY: 'icon-only',
}


export interface ButtonPropsWithoutChildren {
  kind?: 'primary' | 'secondary' | 'ghost',
  size?: 'small' | 'medium' | 'large',
  icon?: 'without-icon' | 'with-icon' | 'icon-only',
  disabled?: boolean, // ???
  className?: string // ???
  style?: object // ???
  onClick?: OnClickAdapter<HTMLButtonElement> // ???
}

type OnClickAdapter<E extends HTMLElement> = (event: MouseEvent<E>) => void

//Button Styles//
export const StyledButton = styled.button<ButtonPropsWithoutChildren>`
font-size:1rem;
font-family:'Arial';
font-weight:500;
cursor:pointer;
border-radius:0.3rem;
outline:none !important;
transition: all 150ms ease-out;
transform: translate3d(0, 0, 0);
padding: ${(props) => 
  (props.size === SIZES.LARGE
    ?
    '1rem 4.86rem'
    :
    props.size === SIZES.SMALL
    ?
    '0.8rem 2.2rem'
    :
    '1.1rem 2.1rem' // SIZES.MEDIUM (Default value for undefind size)
)};


${(props) => {
  if (props.disabled) return ``

  switch (props.kind) {
    case KIND.SECONDARY:
    
      return(`
        color: ${COLOR.$WISH_BLUE};
        border:0.1rem solid ${COLOR.$WISH_BLUE};
        background-color:${COLOR.$WHITE};
        
        &:hover{
          background:${COLOR.$SAPPHIRE};
          color: ${COLOR.$WHITE};
          border:0.1rem solid ${COLOR.$SAPPHIRE};
        }
        &:active{
          background:${COLOR.$DARK_CORNFLOWER_BLUE};
          color: ${COLOR.$WHITE};
          border:0.1rem solid ${COLOR.$DARK_CORNFLOWER_BLUE};
        }`) 

    case KIND.GHOST:
    
      return (`
        color: ${COLOR.$SEXY_PINK};
        background-color:${COLOR.$WHITE};
        border:0.1rem solid ${COLOR.$WHITE} ;
        
        &:hover{
          background:${COLOR.$GRAY15};
          border:0.1rem solid ${COLOR.$GRAY15};
        }
        &:active{
          
          border:0.1rem solid ${COLOR.$SEXY_PINK};
        }`)

    default: // props.kind === KIND.PRIMARY (default kind)

      return (`
        border:0.1rem solid ${COLOR.$SEXY_PINK};
        background-color: ${COLOR.$SEXY_PINK};
        color:${COLOR.$WHITE};
        
        &:hover{
          background: ${COLOR.$MAROON};
          border:0.1rem solid ${COLOR.$MAROON};
        }
        &:active:{
          background: ${COLOR.$JAZZ_BERRY};
          border:0.1rem solid ${COLOR.$JAZZ_BERRY};
        }`)
    
      }   
    } 
  }



${(props) =>{ 
  if (!props.disabled) return ``

  const commonStyleForDisabled = (`
        color:${COLOR.$GRAY20};
        cursor: not-allowed !important;
        &:hover{
          transform: none;
        };
        `)
  switch (props.kind) {
    
    case KIND.SECONDARY:
      return(commonStyleForDisabled + 
        `
        border:0.1rem solid ${COLOR.$GRAY20};

        `)

    case KIND.GHOST:
      return ( commonStyleForDisabled + `
        border:0;
        background:${COLOR.$WHITE}
      `
      )
    default:
      return(commonStyleForDisabled + `
        background:${COLOR.$GRAY15};
        border:0.1rem solid ${COLOR.$GRAY20};  
      `)
  }
  
}
}

`;

export type ButtonProps = PropsWithChildren<ButtonPropsWithoutChildren>;

export const Button = (props: ButtonProps) => {
  
        return (
        <StyledButton
        style={props.style}
        className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}
          {...props}
        >
          {props.children}
        </StyledButton>
      );
}






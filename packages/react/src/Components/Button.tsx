import React from 'react'
import { MouseEvent, PropsWithChildren } from 'react'
import styled from 'styled-components';
// import {useThemeContext} from './theme';
import colors from '@undertheground/color';

declare type IconMode = {
  iconMode?: 'without-icon'
} | {
  iconMode: 'with-icon' | 'icon-only',
  iconSrc: string,
}

export type ButtonPropsWithoutChildren =  {
  kind?: 'primary' | 'secondary' | 'ghost',
  size?: 'small' | 'medium' | 'large',
  disabled?: boolean, 
  isLoading?: boolean, 
  className?: string, 
  style?: object, 
  onClick?: OnClickAdapter<HTMLButtonElement>,
} & IconMode;


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

// const ICON_MODE = {
//   WITHOUT_ICON: 'without-icon',
//   WITH_ICON: 'with-icon',
//   ICON_ONLY: 'icon-only',
// }



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
    '0.6rem 1.8rem'
    :
    '0.8rem 3.2rem' // SIZES.MEDIUM (Default value for undefind size)
)};


${(props) => {
  if (!props.isLoading) return ``
  
  return(
    `
    background-color: ${colors.pink[1]} !important;
    border:0 !important;
    cursor: progress !important;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  
    .loading{
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      border: .18rem solid #303030;
      border-top-color: #FAFAFA;
      animation: spin 1s infinite linear;
    }
    
    `
    )
  }
}

${(props) => {
  if (props.disabled) return ``

  switch (props.kind) {
    case KIND.SECONDARY:
    
      return(`
        color: ${COLOR.$WISH_BLUE};
        border:0.1rem solid ${COLOR.$WISH_BLUE};
        background-color:transparent;
        
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
        background-color:transparent;
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
  if (!props.disabled ) return ``
  const commonStyleForDisabled = (`
        color:${COLOR.$GRAY20};
        cursor: not-allowed;
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
${(props) => {
  if ( (props.iconMode === 'without-icon') || (!props.iconMode) ) return ''
  if (props.iconMode === 'with-icon') {
    return(
    `
    .with-icon{
      display:inline-flex;
      padding:0 auto;
      vertical-align: middle;
    }
    .with-icon-${KIND.PRIMARY} {
      padding-right:8px;
     
    }
  
    .with-icon-${KIND.SECONDARY}{

      padding-right:8px;
    }

    .with-icon-${KIND.GHOST}{
      padding-right:8px;
      
    }
    }

    `
    )
  }
  if (props.iconMode === 'icon-only') {
    return(``
    )}
  return ``
}}

`;

export type ButtonProps = PropsWithChildren<ButtonPropsWithoutChildren>;

export const Button = (props: ButtonProps) => {
  
        return (
        <StyledButton
        style={props.style}
        className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}
        isLoading={props.isLoading}
          {...props}
        >
          <>
          {props.isLoading 
          ? 
          <div className={'loading'}></div> 
          :
          (props.iconMode === 'icon-only') 
          ?
          <img className={'icon-only'} src={props.iconSrc} /> 
          :
          (props.iconMode === 'with-icon') 
          ?
          <div className={'with-icon'}>
          <img className={`with-icon-${props.kind}`} src={props.iconSrc} /> 
          <div>{props.children}</div> 
          </div>
          :
          props.children
} 
          
          
          </>
        </StyledButton>
      );
}


// Button.defaultProps = {
//   loadingText: null,
//   isDisabled: false,
//   ...buttonStyleDefaultProps,
// };

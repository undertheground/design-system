import React from 'react'
import { MouseEvent, PropsWithChildren } from 'react'
import styled from 'styled-components'
import {WishworkThemeContextProvider, useThemeContext, ThemeShape} from './Theme';

const KIND = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
} as const;

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}as const;



type OnClickAdapter<E extends HTMLElement> = (event: MouseEvent<E>) => void

declare type IconMode = {
  iconMode?: 'without-icon'
} | {
  iconMode: 'with-icon' | 'icon-only',
  iconName: string,
}

export type ButtonPropsWithoutChildren =  {
  id?: string;
  kind?: typeof KIND[keyof typeof KIND];
  size?: typeof SIZES[keyof typeof SIZES];
  disabled?: boolean; 
  isLoading?: boolean; 
  className?: string; 
  style?: object;
  theme?: ThemeShape; 
  onClick?: OnClickAdapter<HTMLButtonElement>;
} & IconMode;



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

margin: 1rem;
height: 2.625rem;
padding: ${(props) => 
  (props.size === SIZES.LARGE
    ?
    '0 4.063rem'
    :
    props.size === SIZES.SMALL
    ?
    '0 2.438rem'
    :
    '0 3.25rem' // SIZES.MEDIUM (Default value for undefind size)
)};


${(props) => {
  if (!props.isLoading) return ``
  
  return(
    `
    background-color: ${props.theme.colors.neutralColor[0]} !important;
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
        color: ${props.theme.colors.secondaryColor[4]};
        border:0.14rem solid ${props.theme.colors.secondaryColor[4]};
        background-color:transparent;
        
        &:hover{
          background:${props.theme.colors.secondaryColor[5]};
          color: ${props.theme.colors.neutralColor[1]};
          border:0.14rem solid transparent;
        }
        &:active{
          background:${props.theme.colors.secondaryColor[6]};
          color: ${props.theme.colors.neutralColor[1]};
          border:0.14rem solid transparent;
        }`) 

    case KIND.GHOST:
    
      return (`
        color: ${props.theme.colors.primaryColor[3]};
        background-color:transparent;
        border:0.14rem solid transparent ;
        
        &:hover{
          background:${props.theme.colors.neutralColor[0]};
          border:0.14rem solid transparent;
        }
        &:active{
          
          border:0.14rem solid ${props.theme.colors.primaryColor[5]};
        }`)

    default: // props.kind === KIND.PRIMARY (default kind)

      return (`
        border:0.14rem solid transparent;
        background-color: ${props.theme.colors.primaryColor[1]};
        color:${props.theme.colors.white};
        
        &:hover{
          background: ${props.theme.colors.primaryColor[5]};
          border:0.14rem solid transparent;
        }
        &:active:{
          background: ${props.theme.colors.primaryColor[6]};
          border:0.14rem solid transparent;
        }`)
    
      }        
}}


${(props) =>{ 
  if (!props.disabled ) return ``
  const commonStyleForDisabled = (`
        color:${props.theme.colors.neutralColor[3]};
        cursor: not-allowed;
        &:hover{
          transform: none;
        };
        `)
  switch (props.kind) {
    
    case KIND.SECONDARY:
      return(commonStyleForDisabled + 
        `
        border:0.14rem solid ${props.theme.colors.neutralColor[0]};
        `)
    case KIND.GHOST:
      return ( commonStyleForDisabled + `
      border:0.14rem solid transparent;
        background:${props.theme.colors.white}
      `
      )
    default:
      return(commonStyleForDisabled + `
        background:${props.theme.colors.neutralColor[0]};
        border:0.14rem solid ${props.theme.colors.neutralColor[0]};  
      `)
  }
}
}

${(props) => { 
  if ( (props.iconMode === 'without-icon') || (!props.iconMode) ) return ''
  if (props.iconMode === 'with-icon') {
    return(
    `
    .content{
      display: flex;
      align-items:center;
    }
    .with-icon{
      display:inline-flex;
      padding:0 auto;
      vertical-align: middle;
    }
    .with-icon-${KIND.PRIMARY} {
      padding-right:0.4rem;
    }
  
    .with-icon-${KIND.SECONDARY}{
      padding-right:0.4rem;
    }

    .with-icon-${KIND.GHOST}{
      padding-right:0.4rem;
      
    }

    `
    )
  }
  if (props.iconMode === 'icon-only') {
    return(`
    padding:0.4rem !important;
    
    `
    )}
  return ``
  
}}
`;

export type ButtonProps = PropsWithChildren<ButtonPropsWithoutChildren>;

export const PureButton = (props: ButtonProps) => {
  const theme = props.theme ?? useThemeContext()

    return (
      <StyledButton
      theme={theme}
      id={props.id}
      style={props.style}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
        {...props}
      >
        <>
        {props.isLoading 
        ? 
        <div className={'loading'}></div> 
        :
        (props.iconMode === 'icon-only') 
        ?
        <>
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"rel="stylesheet"/>
        <span className={'material-icons-outlined'}>{props.iconName}</span>
        </>
        :
        (props.iconMode === 'with-icon') 
        ?
        <div className={'with-icon'}>
          <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"rel="stylesheet"/>
          <span className={'material-icons-outlined `with-icon-${props.kind}`'}>{props.iconName}</span>
        <div className={'content'}>{props.children}</div> 
        </div>
        :
        props.children
        } 
        </>
      </StyledButton>
  );
}

export const Button = (props: ButtonProps) => {
  const theme = props.theme ?? useThemeContext()
  return(
    WishworkThemeContextProvider({
      theme: theme,
      children: PureButton(props)
    })
  )
}

// Button.defaultProps = {
//   loadingText: null,
//   isDisabled: false,
//   ...buttonStyleDefaultProps,
// };

import React from 'react'
import { MouseEvent, PropsWithChildren } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import {WishworkThemeContextProvider, useThemeContext, ThemeShape} from '../Horizontal/Theme';

const KIND = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
} as const;

const SIZE_TYPES = {
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
  iconType?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone',
}

export type ButtonPropsWithoutChildren =  {
  id?: string;
  kind?: typeof KIND[keyof typeof KIND];
  sizeType?: typeof SIZE_TYPES[keyof typeof SIZE_TYPES];
  disabled?: boolean; 
  isLoading?: boolean; 
  className?: string; 
  style?: object;
  theme?: ThemeShape; 
  onClick?: OnClickAdapter<HTMLButtonElement>;
  windowWidth?: string;
} & IconMode;



//Button Styles//
export const StyledButton = styled.button<ButtonPropsWithoutChildren >`
font-family:'Arial';
font-weight:500;
cursor:pointer;
border-radius:0.3rem;
outline:none !important;
transition: all 150ms ease-out;
transform: translate3d(0, 0, 0);


${(props) =>{
  switch(props.sizeType){
    case SIZE_TYPES.SMALL:
      return(`
      font-size:0.875rem;
      height: 2rem;
      padding:0 1rem;
      span {
        font-size: 1.2rem;
      }
      ${() => {
        switch (props.windowWidth) {
        case 'sm':
          return(`
            font-size:4.875rem;
            height: 2rem;
            padding:0 0.5rem;
            font-color:blue;
            span {
              font-size: 1.2rem;
            }`
          )
      
        default:
        return``
      }
      }}


      `)
    case SIZE_TYPES.LARGE:
      return(`
      height: 3rem;
      font-size: 1.25rem;
      padding:0 4rem;
      span {
        font-size: 1.6rem;

      }
      ${breakpoint('mobile')`
        font-size: 1rem ;
        padding:0 3rem;
      `}
      `)


      default: 
      return(`
      height: 2.5rem;
      font-size:1rem;
      padding:0 3rem;
      span {
        font-size: 1.5rem;
  
      }
      `)
  }
}}

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
      padding-left:0.3rem;
    }
    .with-icon{
      display:inline-flex;
      padding:0 auto;
      vertical-align: middle;
      margin-right:0.5rem;
    }

    `
    )
  }
  if (props.iconMode === 'icon-only') {
    return(`
    padding: 0;

    .icon-only-${SIZE_TYPES.SMALL} {
      padding: 0.3rem 0.4rem 0.1rem 0.4rem ;
    }
  
    .icon-only-${SIZE_TYPES.MEDIUM}{
      padding:0.36rem 0.4rem 0.4rem 0.4rem ;
    }

    .icon-only-${SIZE_TYPES.LARGE}{
      padding:0.2rem 0.6rem 0rem 0.6rem ;
      
    }
    `
    )}
  return ``
  
}}
`;

export type ButtonProps = PropsWithChildren<ButtonPropsWithoutChildren>;

export const PureButton = (props: ButtonProps) => {
  const theme = props.theme ?? useThemeContext()
  const sizeType = props.sizeType ?? 'medium'

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
      (!props.iconType || props.iconType === 'filled')
      ? 
      <div className={`icon-only-${sizeType}`}>
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet"/>
        <span className={'material-icons'}>{props.iconName}</span>
      </div>
      :
      <div className={`icon-only-${sizeType}`}>
        <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
        <span className={`material-icons-${props.iconType}`}>{props.iconName}</span>
      </div>
    :
    (props.iconMode === 'with-icon') 
    ?
      (!props.iconType || props.iconType === 'filled')
      ? 
      <div className={'with-icon'}>
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet"/>
        <span className={'material-icons'}>{props.iconName}</span>
      <div className={'content'}>{props.children}</div> 
      </div>
      :
      <div className={'with-icon'}>
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
      <span className={`material-icons-${props.iconType}`}>{props.iconName}</span>
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

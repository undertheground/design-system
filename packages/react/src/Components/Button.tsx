import React from 'react'
import { MouseEvent, PropsWithChildren } from 'react'
import styled from 'styled-components';
// import {useThemeContext} from './theme';
import colors from '@undertheground/color';

declare type IconMode = {
  iconMode?: 'without-icon'
} | {
  iconMode: 'with-icon' | 'icon-only',
  iconName: string,
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
    '0.813rem 4.063rem'
    :
    props.size === SIZES.SMALL
    ?
    '0.813rem 2.438rem'
    :
    '0.813rem 3.25rem' // SIZES.MEDIUM (Default value for undefind size)
)};


${(props) => {
  if (!props.isLoading) return ``
  
  return(
    `
    background-color: ${colors.grey[0]} !important;
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
        color: ${colors.blue[4]};
        border:0.14rem solid ${colors.blue[4]};
        background-color:transparent;
        
        &:hover{
          background:${colors.blue[5]};
          color: ${colors.grey[1]};
          border:0.14rem solid transparent;
        }
        &:active{
          background:${colors.blue[6]};
          color: ${colors.grey[1]};
          border:0.14rem solid transparent;
        }`) 

    case KIND.GHOST:
    
      return (`
        color: ${colors.pink[3]};
        background-color:transparent;
        border:0.14rem solid transparent ;
        
        &:hover{
          background:${colors.grey[0]};
          border:0.14rem solid transparent;
        }
        &:active{
          
          border:0.14rem solid ${colors.pink[5]};
        }`)

    default: // props.kind === KIND.PRIMARY (default kind)

      return (`
        border:0.14rem solid transparent;
        background-color: ${colors.pink[1]};
        color:${colors.white};
        
        &:hover{
          background: ${colors.pink[5]};
          border:0.14rem solid transparent;
        }
        &:active:{
          background: ${colors.pink[6]};
          border:0.14rem solid transparent;
        }`)
    
      }   
    } 
  }


${(props) =>{ 
  if (!props.disabled ) return ``
  const commonStyleForDisabled = (`
        color:${colors.grey[3]};
        cursor: not-allowed;
        &:hover{
          transform: none;
        };
        `)
  switch (props.kind) {
    
    case KIND.SECONDARY:
      return(commonStyleForDisabled + 
        `
        border:0.14rem solid ${colors.grey[0]};
        `)
    case KIND.GHOST:
      return ( commonStyleForDisabled + `
      border:0.14rem solid transparent;
        background:${colors.white}
      `
      )
    default:
      return(commonStyleForDisabled + `
        background:${colors.grey[0]};
        border:0.14rem solid ${colors.grey[0]};  
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
    padding-bottom: 0.1rem !important;
    
    `
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
          <>
          <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"rel="stylesheet"/>
          <span className={'material-icons-outlined'}>{props.iconName}</span>
          {/* <img className={'icon-only'} src={props.iconSrc} />  */}
          </>
          :
          (props.iconMode === 'with-icon') 
          ?
          <div className={'with-icon'}>
            <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"rel="stylesheet"/>
            <span className={'material-icons-outlined `with-icon-${props.kind}`'}>{props.iconName}</span>
           {/* <img className={`with-icon-${props.kind}`} src={props.iconSrc} />  */}
          <div className={'content'}>{props.children}</div> 
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

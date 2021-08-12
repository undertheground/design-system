import React from 'react'
import {MouseEvent, PropsWithChildren} from 'react'
import styled from 'styled-components';

export const Button_abas = styled.button`
padding:1rem 10rem;
border-radius:1rem;
color:#fff;
font-size:1rem;
font-family:'Arial';
border: none;
background:#D1036F
`;


type OnClickAdapter<E extends HTMLElement> = (event: MouseEvent<E>) => void

interface ButtonPropsWithoutChildren {
  kind: 'primary' | 'secondary' | 'ghost'
  size: 'small' | 'medium' | 'large'
  disabled?: boolean
  icon?: 'with-icon' | 'icon-only'  
  onClick(): OnClickAdapter<HTMLButtonElement>
}

export type ButtonProps = PropsWithChildren<ButtonPropsWithoutChildren>;

// export const Button = (props: ButtonProps) => {
//   const {
//     kind,
//     icon,
//     size,
//     disabled,
//     children,
//     ...restOfProps
//   } = props;
//   const kindClass = `btn-${kind}`;
//   const iconClass = icon ? `btn-${icon}` : undefined;
//   const sizeClass = `btn-${size}`;

//   return (
//     <button
//       type="button"
//       className={
//         ['btn',
//         kindClass,
//         iconClass,
//         sizeClass,
//       ].join(' ')}
//       disabled={disabled ?? false}
//       {...restOfProps}
//     >
//       {children}
//     </button>
//   );
// };

export const Button = (props: ButtonProps) => {
  const {
    kind,
    icon,
    size,
    disabled,
    children,
    ...restOfProps
  } = props;
        return (
        <Button_abas
          {...restOfProps}
        >
          {children}
        </Button_abas>
      );
    }
 
import React , { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import colors from '@undertheground/color';



export type CheckBoxProps = {
    id?: string;
    required?: boolean;
    disable?: boolean;
    className?: string;
    label: ReactNode;
    hideLabel?: boolean;
    error?: ReactNode;
}


export const Checkbox: FunctionComponent<CheckBoxProps> = ({
  id,
  label,
  error,
  hideLabel,
  ...props
}) => {
  return (
    <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link> 
 
      <Label className={'label-cbx'}>
        <input
          className={'invisible'}
          {...props}
          id={id}
          type="checkbox"
        />
        <div className={'checkbox'}>
          <svg width="18px" height="18px" viewBox="0 0 20 20">
            <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,
            17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,
            1.8954305 1.8954305,1 3,1 Z"></path>
            <polyline points="4 11 8 15 16 6"></polyline>
          </svg>
        </div>
        {label}
      </Label>

     </> 
  );
};



const Label = styled.label`
font-family:"Mukta Vaani";
font-weight: 400;
font-size: 16px;
user-select: none;
cursor: pointer;
margin-bottom: 0;
  

input:checked + .checkbox {
  border-color:${colors.blue[3]};
}
input:checked + .checkbox svg path {
  fill:${colors.blue[3]};
}
input:checked + .checkbox svg polyline {
  stroke-dashoffset: 0;
}
:hover .checkbox svg path {
  stroke-dashoffset: 0;
}
.checkbox {
  position: relative;
  top: 2px;
  float: left;
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border: 2px solid ${colors.grey[2]};
  border-radius: 3px;
}
.checkbox svg {
  position: absolute;
  top: -2px;
  left: -2px;
}
.checkbox svg path {
  fill: none;
  stroke: ${colors.blue[3]};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 71px;
  stroke-dashoffset: 71px;
  transition: all 0.6s ease;
}
.checkbox svg polyline {
  fill: none;
  stroke: #FFF;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 18px;
  stroke-dashoffset: 18px;
  transition: all 0.3s ease;
}

.invisible {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
}
`;


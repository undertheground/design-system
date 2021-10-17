import React, { ReactChild, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { pink9940, pink9964, pink9982, white,blue8658 } from '@undertheground/color/dist/color';
// import colors from '@undertheground/color';

export interface LinkProps {
  id?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: '_self' | '_blank' | '_parent' | '_top';
  placeholder?: string;
  disabled?: boolean;
  children?: ReactChild | ReactChild[];
  place?: 'sidebar' | 'navbar' | 'paragraph';
  darkMode?: boolean;
}
interface StyledLinkProps {
  place?: 'sidebar' | 'navbar' | 'paragraph';
  darkMode?: boolean;
}

export function Link(
  props: LinkProps
): React.FunctionComponentElement<LinkProps> {
  console.log(props);
  return (
    <StyledLink
      id={props.id}
      href={!props.disabled ? props.href : undefined}
      target={props.target}
      onClick={props.onClick}
      place={props.place}
      darkMode={props.darkMode}
    >
      {props.placeholder ? props.placeholder : props.children}
    </StyledLink>
  );
}

const StyledLink = styled.a<StyledLinkProps>`
  ${(props) =>
    props.place === 'paragraph'
      ? `
      color: ${pink9982};
      text-decoration-line: underline;
      &:hover{
        color: ${pink9964};
      }
      &:visited{
        color: ${pink9940};
      }
`
      : null}
      ${
        props=>props.place === 'navbar'?`
        text-decoration: none;
        display: inline-block;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #1D62D1;
          transform-origin: bottom center;
          transition: transform 0.25s ease-out;
        }
        &:hover{
          color: #1D62D1;
        }
        &:hover:after {
          transform: scaleX(1);
          transform-origin: bottom center;

        }
        &:visited{
          color: ${blue8658};
          text-decoration: underline;
          background: none;
        }
        `:null
      }
  ${(props) => {
    if (!props.darkMode) {
      switch (props.place) {
        case 'navbar':
          return `color: #161616;`;
        case 'sidebar':
          return `
          color: #161616;
          text-decoration-line: none;
          &:hover{
            color: ${pink9982};
          }
          &:visited{
            color: ${pink9982};
          }
          `;
        default:
          return null;
      }
    } else {
      switch (props.place) {
        case 'navbar':
          return `color: ${white};`;
        case 'sidebar':
          return `
          color: ${white};
          text-decoration-line: none;
          &:hover{
            color: ${pink9982};
          }
          &:visited{
            color: ${pink9982};
          }
          `;

        default:
          return null;
      }
    }
  }}
`;

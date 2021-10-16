import React from 'react';
import styled from 'styled-components';

interface TypographyFunctionalProps {
  children?: number | string;
  variant?:
    | 'Title/Header1'
    | 'Header2'
    | 'Header3'
    | 'subtitle/body-large'
    | 'body'
    | 'bold-body'
    | 'small-medium'
    | 'small-regular'
    | 'pre-title'
    | 'button-text'
    | 'Link'
    | 'estimated-number'
    | 'main-number-divider'
    | 'page-number'
    | 'website-link'
    | 'note'
    | 'small-light';
  TextStyle?: 'inline-code' | 'HandWriting-header' | 'HandWriting-logo';
}
interface TypographyAestheticProps {}
export type TypographyProps = TypographyAestheticProps &
  TypographyFunctionalProps;

export function Typography(
  props: TypographyProps
): React.FunctionComponentElement<TypographyProps> {
  console.log(props);
  return (
    <StyledTypography
      variant={props.variant}
      TextStyle={props.TextStyle}
      role="text"
    >
      {props.children}
    </StyledTypography>
  );
}

const StyledTypography = styled.div<TypographyProps>`
  ${(props) => {
    switch (props.TextStyle) {
      case 'inline-code':
        return `
      font-family: "Space Mono";
      font-weight: normal;
      font-size: 1rem;
      letter-spacing: 0;
      `;
      case 'HandWriting-header':
        return `
        font-family: "Caveat";
        font-weight: bold;
        font-size: 1.875rem;
        letter-spacing: 0;
        `;
      case 'HandWriting-logo':
        return `
        font-family: "Caveat";
        font-weight: normal;
        font-size: 1rem;
        letter-spacing: 0;
        `;
      default:
        return null;
    }
  }}
  ${(props) => {
    switch (props.variant) {
      case 'Title/Header1':
        return `font-family: "Mukta Vaani";
        font-weight: bold;
        font-size: 4rem;
        letter-spacing: -2%;`;
      case 'Header2':
        return `font-family: "Mukta Vaani";
        font-weight: bold;
        font-size: 2.5rem;
        letter-spacing: -2%;
        `;
      case 'Header3':
        return `font-family: "Mukta Vaani";
        font-weight: bold;
        font-size: 1.875rem;
        letter-spacing: -2%;
        `;
      case 'subtitle/body-large':
        return `
        font-family: "Mukta Vaani";
        font-weight: 500;
        font-size: 1.5rem;
        `;
      case 'body':
        return `
      font-family: "Mukta Vaani";
      font-weight: 500;
      font-size: 1rem;
      line-height: 140%;
        `;
      case 'bold-body':
        return `
        font-family: "Mukta Vaani";
        font-weight: bold;
        font-size: 1rem;
        line-height: 140%;
        `;
      case 'small-medium':
        return `font-family: "Mukta Vaani";
        font-weight: 500;
        font-size: 0.875rem;`;
      case 'small-regular':
        return `font-family: "Mukta Vaani";
        font-weight: normal;
        font-size: 0.875rem;
        `;
      case 'small-light':
        return `
        font-family: "Mukta Vaani";
        font-weight: 300;
        font-size: 0.875rem;
        `;
      case 'pre-title':
        return `
        font-family: "Mukta Vaani";
        font-weight: bold;
        font-size: 0.625rem;
        letter-spacing: 3%;
        `;
      case 'button-text':
        return `font-family: "Arial";
        font-weight: bold;
        font-size: 1rem;
        letter-spacing: 3%;
        `;
      case 'Link':
        return `font-family: "Mukta Vaani";
        font-weight: bold;
        font-size: 1rem;
        text-decoration-line: underline;
        `;
      case 'website-link':
        return `
        font-family: "Mukta Vaani";
        font-weight: 500;
        font-size: 0.75rem;
        `;
      case 'note':
        return `
        font-weight: 500;
        font-family: "Mukta Vaani";
        font-size: 0.625rem;
        `;
      case 'estimated-number':
        return `
          font-family: "Mukta Vaani";
          font-weight: bolder;
          font-size: 3.75rem;
          letter-spacing: 0;
          `;
      case 'main-number-divider':
        return `
            font-family: "Mukta Vaani";
            font-weight: bolder;
            font-size: 2.5rem;
            letter-spacing: 0;
            `;
      case 'page-number':
        return `
            font-family: "Mukta Vaani";
            font-weight: bold;
            font-size: 1.25rem;
            letter-spacing: 0;
            `;
      default:
        return null;
    }
  }}
`;

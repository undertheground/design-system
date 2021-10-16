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
    | 'button text'
    | 'Link'
    | 'estimated-number'
    | 'main-number-divider'
    | 'page-number';
  TextStyle?: 'inline-code' | 'HandWriting-header' | 'HandWriting-logo';
}
interface TypographyAestheticProps {}
export type TypographyProps = TypographyAestheticProps &
  TypographyFunctionalProps;

export function Typography(
  props: TypographyProps
): React.FunctionComponentElement<TypographyProps> {
  console.log(props);
  return <StyledTypography variant={props.variant} TextStyle={props.TextStyle} role="text">{props.children}</StyledTypography>;
}

const StyledTypography = styled.div<TypographyProps>``;

import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface AccordionFunctionalProps {
  id?: string;
  children?: ReactChild | ReactChild[];
  placeholder?: string;
}
interface AccordionaestheticProps {}
export type AccordionProps = AccordionFunctionalProps & AccordionaestheticProps;

export function Accordion(props: AccordionProps) {
  console.log(props);
  return (
    <AccordionWrapper id={props.id}>
      <AccordionHeader>
        <Icon IconName={'expand_more'} />
        {props.placeholder}
      </AccordionHeader>
      <AccordionContent>{props.children}</AccordionContent>
    </AccordionWrapper>
  );
}

function Icon(props: { IconName?: 'expand_more' | 'close' }) {
  return (
    <AccordionIcon color={'#ED037C'}>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
        rel="stylesheet"
      />
      <span style={{ fontSize: '2.25rem' }} className={'material-icons'}>
        {props.IconName}
      </span>
    </AccordionIcon>
  );
}

const AccordionIcon = styled.div<{ color?: string }>`
  color: ${(props) => props.color};
  display: flex;
  margin-right: 1rem;
`;
const AccordionWrapper = styled.div``;
const AccordionHeader = styled.header`
  display: flex;
  background: #f4f4f4;
  align-items: center;
  padding: 1.385rem;
  font-family: 'Mukta';
  font-style: normal;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 4rem;
  color: #303030;
  cursor: pointer;
`;
const AccordionContent = styled.main`
  background: #ffffff;
  border-radius: 0px 0px 2px 2px;
  font-family: Mukta;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.125rem;
  letter-spacing: 0.01rem;
  color: #000000;
`;

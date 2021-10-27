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
      <span className={'material-icons'}>{props.IconName}</span>
    </AccordionIcon>
  );
}

const AccordionIcon = styled.div<{ color?: string }>``;
const AccordionWrapper = styled.div``;
const AccordionHeader = styled.header``;
const AccordionContent = styled.main``;

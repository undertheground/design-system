import React from 'react';

interface AccordionFunctionalProps {}
interface AccordionaestheticProps {}
export type AccordionProps = AccordionFunctionalProps & AccordionaestheticProps;

export function Accordion(props:AccordionProps) {
    console.log(props)
  return <div></div>;
}

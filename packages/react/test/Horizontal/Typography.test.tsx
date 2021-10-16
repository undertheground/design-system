import { Typography } from '../../src/Horizontal/Typography';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('testing typography', () => {
  it('renders without errors', () => {
    render(<Typography>{'text'}</Typography>);
    expect(screen.queryByText('text')).toBeInTheDocument();
  });
  it('can be for Title/Header 1', () => {
    render(
      <Typography variant={'Title/Header1'}>{'Title/Header 1'}</Typography>
    );
    expect(screen.getByText('Title/Header 1'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: bold;
    font-size: 4rem;
    letter-spacing: -2%;`);
  });
  it('can be for Header 2', () => {
    render(<Typography variant={'Header2'}>{'Header 2'}</Typography>);
    expect(screen.getByText('Header 2'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: bold;
    font-size: 2.5rem;
    letter-spacing: -2%;`);
  });
  it('can be for Header 3', () => {
    render(<Typography variant={'Header3'}>{'Header 3'}</Typography>);
    expect(screen.getByText('Header 3'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: bold;
    font-size: 1.875rem;
    letter-spacing: -2%;`);
  });
  it('can be for subtitle/body large', () => {
    render(
      <Typography variant={'subtitle/body-large'}>
        {'subtitle/body large'}
      </Typography>
    );
    expect(screen.getByText('subtitle/body large'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: 500;
    font-size: 1.5rem;`);
  });
  it('can be for body', () => {
    render(<Typography variant={'body'}>{'body'}</Typography>);
    expect(screen.getByText('body')).toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: 500;
    font-size: 1rem;
    line-height: 140%;`);
  });
  it('can be for bold body', () => {
    render(<Typography variant={'bold-body'}>{'bold body'}</Typography>);
    expect(screen.getByText('bold body'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: bold;
    font-size: 1rem;
    line-height: 140%;`);
  });
  it('can be for small medium', () => {
    render(<Typography variant={'small-medium'}>{'small medium'}</Typography>);
    expect(screen.getByText('small medium'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: 500;
    font-size: 0.875rem;`);
  });
  it('can be for small regular', () => {
    render(
      <Typography variant={'small-regular'}>{'small regular'}</Typography>
    );
    expect(screen.getByText('small regular'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: normal;
    font-size: 0.875rem;`);
  });
  it('can be for small light', () => {
    render(<Typography variant={'small-light'}>{'small light'}</Typography>);
    expect(screen.getByText('small light'))
      .toHaveStyle(`font-family: "Mukta Vaani";
      font-weight: 300;
    font-size: 0.875rem;`);
  });
  it('can be for pre title', () => {
    render(<Typography variant={'pre-title'}>{'pre title'}</Typography>);
    expect(screen.getByText('pre title'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: bold;
    font-size: 0.625rem;
    letter-spacing: 3%;`);
  });
  it('can be for button text', () => {
    render(<Typography variant={'button-text'}>{'button text'}</Typography>);
    expect(screen.getByText('button text')).toHaveStyle(`font-family: "Arial";
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 3%;
    `);
  });
  it('can be for Link', () => {
    render(<Typography variant={'Link'}>{'Link'}</Typography>);
    expect(screen.getByText('Link')).toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: bold;
    font-size: 1rem;
    text-decoration-line: underline;
    `);
  });
  it('can be for website link', () => {
    render(<Typography variant={'website-link'}>{'website link'}</Typography>);
    expect(screen.getByText('website link'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: 500;
    font-size: 0.75rem;
    `);
  });
  it('can be for Notes', () => {
    render(<Typography variant={'note'}>{'Notes'}</Typography>);
    expect(screen.getByText('Notes')).toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: 500;
    font-size: 0.625rem;
    `);
  });
  it('can be for estimated number', () => {
    render(
      <Typography variant={'estimated-number'}>{'estimated number'}</Typography>
    );
    expect(screen.getByText('estimated number'))
      .toHaveStyle(`font-weight: bolder;
    font-family: "Mukta Vaani";
    font-size: 3.75rem;
    letter-spacing: 0;
    `);
  });
  it('can be for main number', () => {
    render(
      <Typography variant={'main-number-divider'}>{'main number'}</Typography>
    );
    expect(screen.getByText('main number'))
      .toHaveStyle(`font-family: "Mukta Vaani";
    font-weight: bolder;
    font-size: 2.5rem;
    letter-spacing: 0;
    `);
  });
  it('can be for page number', () => {
    render(<Typography variant={'page-number'}>{'page number'}</Typography>);
    expect(screen.getByText('page number')).toHaveStyle(`
    font-family: "Mukta Vaani";
    font-weight: bold;
    font-size: 1.25rem;
    letter-spacing: 0;
    `);
  });
  it('can be styled for hand-writing next to logo', () => {
    render(
      <Typography TextStyle={'HandWriting-logo'}>
        {'hand-writing next to logo'}
      </Typography>
    );
    expect(screen.getByText('hand-writing next to logo')).toHaveStyle(`
    font-family: "Caveat";
    font-weight: normal;
    font-size: 1rem;
    letter-spacing: 0;
    `);
  });
  it('can be styled for hand-writing next to header', () => {
    render(
      <Typography TextStyle={'HandWriting-header'}>
        {'hand-writing next to header'}
      </Typography>
    );
    expect(screen.getByText('hand-writing next to header')).toHaveStyle(`
    font-family: "Caveat";
    font-weight: bold;
    font-size: 1.875rem;
    letter-spacing: 0;
    `);
  });
  it('can be styled for inline code', () => {
    render(<Typography TextStyle={'inline-code'}>{'inline code'}</Typography>);
    expect(screen.getByText('inline code'))
      .toHaveStyle(`font-family: "Space Mono";
    font-weight: normal;
    font-size: 1rem;
    letter-spacing: 0;
    `);
  });
});

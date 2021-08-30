import React from "react";
// import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import { Primary } from "../../stories/components/Button.stories";
import '@testing-library/jest-dom/extend-expect';

it('renders the button in the primary state', () => {
    const PrimaryProps = {
        args: Primary.args
    }
    render(<Primary children={"Button"}/>);
    expect(screen.getByRole('button')).toHaveTextContent('Button');
});


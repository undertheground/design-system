import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';


const theme ={
    breakpoints:{
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>{/* ... */}</ThemeProvider>,
    document.getElementById('app'),
);

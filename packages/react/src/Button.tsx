import React from 'react';
import Btn from '@mui/material/Button';

export interface ButtonType {
    variant: "text" | "contained" | "outlined";
    children: string
}

const Button: React.FC<ButtonType> = ({variant, children}) => {
    return <Btn variant={variant}>{children}</Btn>
}

export default Button
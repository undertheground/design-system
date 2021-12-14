import React from 'react';
import MaterialButton from '@mui/material/Button';

export interface ButtonType {
    variant: "text" | "contained" | "outlined";
    children: string
}

const Button: React.FC<ButtonType> = ({ variant, children }) => {
    return <MaterialButton variant={variant}>{children}</MaterialButton>
}

export default Button
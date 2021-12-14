import React from 'react';
import MaterialTextField from '@mui/material/TextField';

export interface TextFieldType {
    variant: "outlined" | "standard" | "filled";
    size: "small" | "medium";
    label: string
}

const TextField: React.FC<TextFieldType> = props => <MaterialTextField {...props} />;

export default TextField
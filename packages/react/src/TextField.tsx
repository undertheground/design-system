import React from 'react';
import TF from '@mui/material/TextField';


export interface TextFieldType {
    variant: "outlined" | "standard" | "filled" | undefined;
    size: "small" | "medium" | undefined;
    label: string
}

const TextField: React.FC<TextFieldType> = ({variant, size, label}) => {
    return(
        <div>
            <TF variant={variant} label={label} size={size}/>
        </div>
    )
}

export default TextField
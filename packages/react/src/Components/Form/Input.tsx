import React , {useEffect , useState} from 'react';
import styled from 'styled-components';
import colors from '@undertheground/color';



const SIZE_TYPES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
  }as const;


declare type CounterType = {
    hasCounter?:false;
} | {
    hasCounter:true;
    maxCount:Number;
}

export type TextInputProps = {
    title: string;
    
    name?: string;
    type?: 'string' | 'number';
    id?: string;
    required?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    value?: string | number;

    isError?:boolean;
    errorMsg?:string;

    isSuccess?:boolean;
    successMsg?:string;

    showHelp?:boolean;
    helperMsg?:string;
    
    inputClassName?: string;
    lableClassName?: string;
    
    leftIconName?: string;
    rightIconName?: string;
  
    sizeType?: typeof SIZE_TYPES[keyof typeof SIZE_TYPES];
    
} & CounterType;


export const TextInput = (props: TextInputProps) => {
    const[count , setCount] = useState(0)
    useEffect(()=>{
        if (typeof(props.value) === 'string' ) {
            setCount(props.value.length) 
        }
        console.log(props.value)
    }, [props.value])

    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link> 

        <StyledDiv 
        leftIconName={props.leftIconName}
        isError={props.isError}
        isSuccess={props.isSuccess}
        showHelp={props.showHelp}
        >
        
            <StyledInput 
            {...props}
            className={props.inputClassName}
            type={props.type}
            placeholder={props.title}
            id={props.id}
            value={props.value}
            disabled={props.disabled}
            isError={props.isError}
            isSuccess={props.isSuccess}
            showHelp={props.showHelp}
            leftIconName={props.leftIconName}
            
            />

            <TitleSpan
            className={props.lableClassName}
            leftIconName={props.leftIconName}
            isError={props.isError}
            isSuccess={props.isSuccess}
            showHelp={props.showHelp}
            >
            {props.title}
            </TitleSpan>

            {props.leftIconName &&
            <LeftImageSpan
            isError={props.isError}
            isSuccess={props.isSuccess}
            showHelp={props.showHelp}
            >
                <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"rel="stylesheet"/>
                <span className={'material-icons-outlined'}>{props.leftIconName}</span>
            </LeftImageSpan>
            }

            {props.rightIconName &&
            <RightImageSpan
            isError={props.isError}
            isSuccess={props.isSuccess}
            showHelp={props.showHelp}
            >
                <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"rel="stylesheet"/>
                <span className={'material-icons-outlined'}>{props.rightIconName}</span>
            </RightImageSpan>
            }
            
        </StyledDiv>
            
        {props.isError 
        ?
        <Message
            isError={props.isError}
            errorMsg={props.errorMsg}
        >
            {props.errorMsg}
        </Message>
        :
        (props.isSuccess)
        ?
        <Message
            isSuccess={props.isSuccess}
            successMsg={props.successMsg}
        >
            {props.successMsg}
        </Message>
        :
        <Message
        showHelp={props.showHelp}
        helperMsg={props.helperMsg}
        >
            {props.helperMsg}
        </Message>
        }

        {props.hasCounter &&
        <Counter
        count={count}
        hasCounter={props.hasCounter}
        maxCount={props.maxCount}
        >
            {count}/{props.maxCount}
        </Counter>
        }
        </>
    
    );
}

export const StyledDiv = styled.div<Pick<TextInputProps, "sizeType" | "leftIconName" | "isError" | "isSuccess" | "showHelp">>`
font-family:"Mukta Vaani";
font-weight: 400;
display:flex;
position:relative;
width:24rem;

input:not(:placeholder-shown) + span{
    color: ${colors.grey[3]};
    transform: translateY(-0.6rem);
    background: ${colors.white};
    text-align: center;
    margin-left: 1rem;
    transition-duration:350ms;
    font-size: 0.825rem;
    visibility: visible; 
    ${(props) =>{
        if (props.leftIconName) {
        return(`
            margin-left:1rem;
        `)
        }
        return ``
    }} 

    ${(props) =>{
        if (props.isError) {
        return(`
        color: red;
        `)
        }
        if(props.isSuccess){
            return(`
            color: green;
            `)
        }
        return (`
        color: ${colors.blue[3]};
        `)
    }}  
}


input:hover ~ span, input:focus ~ span {
    ${(props) =>{
        if (props.isError) {
        return(`
        color: red;
        `)
        }
        if(props.isSuccess){
            return(`
            color:green;
            `)
        }
        return (`
        color: ${colors.blue[3]};
        `)
    }}
}

input:focus + span {
    display:flex;    
    transform:translateY(-0.6rem);
    background:${colors.white};
    text-align:center;
    margin-left:1rem;
    font-size: 0.825rem; 
    visibility: visible;
    transition-duration:350ms;
    ${(props) =>{
        if (props.leftIconName) {
        return(`
            margin-left:1rem;
        `)
        }
        return ``
    }}
    ${(props) =>{
        if (props.isError) {
        return(`
        color: red;
        `)
        }
        if(props.isSuccess){
            return(`
            color: green;
            `)
        }
        return (`
        color: ${colors.blue[3]};
        `)
    }}
}
`

export const StyledInput = styled.input<Pick<TextInputProps, "sizeType" | "isLoading" | "leftIconName" | "rightIconName" | "isError" | "isSuccess" | "showHelp">>`
  
font-size: 1rem;
width:100%; 
outline:none;
height: 2.2rem;
font-size: 1rem;
background-color: transparent;
border: 0.12rem solid ${colors.grey[2]};
border-radius: 0.2rem;
outline: none;
transition-duration:300ms;

${(props) =>{
    if (props.leftIconName) {
    return(`
        padding: 0.313rem 3.2rem;
    `)
    }
    return (`
        padding: 0.313rem 1.2rem;
    `)
}}

${(props) =>{
    if (props.isError) {
    return(`
        border: 0.12rem solid red;
        :hover, :focus {
            border-color: red;
            
        }
        ::placeholder {
            color: red;
        }
        :hover::placeholder {
            color: red;
        }
    `)
    }
    if(props.isSuccess){
        return(`
        border: 0.12rem solid green;
        :hover, :focus {
            border-color: green;
            
        }
        ::placeholder {
            color: green;
        }
        :hover::placeholder {
            color: green;
        }
        `)
    }
    return (`
        border: 0.12rem solid ${colors.grey[2]};
        :hover, :focus {
            border-color: ${colors.blue[3]};
            
        }
        ::placeholder {
            color: ${colors.grey[3]};
            font-family:"Mukta Vaani";
            font-weight: 400;
        }
        :hover::placeholder {
            color: ${colors.blue[3]};
        }
        
        
    `)
}}


:focus::placeholder {
    visibility: hidden;
}

${(props) =>{
    if (!props.disabled) return ''
    return(
        `
        cursor: not-allowed;   
        :hover{
            border-color: ${colors.grey[1]};
        }
        :hover::placeholder{
            color: ${colors.grey[3]};
        }
        `
    )
}}


${(props) => {

    switch (props.sizeType) {
        case SIZE_TYPES.SMALL:
            return(`
                width: 16rem; 
            `)
        
        case SIZE_TYPES.MEDIUM:
            return(`
            `)

        case SIZE_TYPES.LARGE:
            return(`
            `)
        default:
        return(`

        `)
    }
}}


`

export const LeftImageSpan = styled.span<Pick<TextInputProps, "leftIconName" | "isError" | "isSuccess" | "showHelp">>`

position:absolute;
margin:0.8rem 1.25rem;

${(props) =>{
    if (props.isError) {
    return(`
    color: red;
    `)
    }
    if(props.isSuccess){
        return(`
            color:green;
        `)
        
    }
    return (`
    color: ${colors.grey[2]};
    `)
}}

`


export const RightImageSpan = styled.span<Pick<TextInputProps, "rightIconName"| "isError"| "isSuccess" | "showHelp">>`
position:absolute;
margin:0.8rem calc(100% - 2.75rem);

${(props) =>{
    if (props.isError) {
    return(`
    color: red;
    `)
    }
    if(props.isSuccess){
        return(`
            color:green;
        `)
        
    }
    return (`
    color: ${colors.grey[2]};
    `)
}}
`

export const Message = styled.p<Pick<TextInputProps, "isError" | "isSuccess" | "errorMsg" | "successMsg" | "helperMsg" | "showHelp" | "helperMsg" >>`
color:red;
margin-top:0.3rem;
margin-left:0.2rem;
display:grid;
font-family:"Mukta Vaani";
font-weight: 500;
font-size:0.8rem;

${(props) =>{
    if (props.errorMsg) {
        return(`
        color: red;
        `)
        }
    if(props.successMsg){
        return(`
            color: green;
        `)
        
    }
    return (`
    color: ${colors.grey[5]};
    `)
}}
`

export const Counter = styled.p<CounterType & {count: number}>`
    color: ${colors.grey[5]};
    display:flex;
    font-family:"Mukta Vaani";
    font-weight: 500;
    margin-top:0.3rem;
`

export const TitleSpan= styled.span<Pick<TextInputProps, "leftIconName" | "isError"| "isSuccess" | "showHelp"> >`
margin-left: 1rem;
cursor: text;
font-size:1rem;
border-left:0.5rem solid white;
border-right:0.5rem solid white;
border-bottom:0px;
position:absolute;
visibility: hidden;

${(props) =>{
    if (props.leftIconName) {
    return(`
        margin-left:1rem;
    `)
    }
    return ``
    }}

    ${(props) =>{
        if (props.isError) {
        return(`
            color: red;
        `)
        }
        if(props.isSuccess){
            return(`
                color:green;
            `)
            
        }
        return (`
        color: ${colors.grey[2]};
        `)
    }}

`



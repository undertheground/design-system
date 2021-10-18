import React from 'react'
import styled from 'styled-components'

export interface DividerProps {darkMode?:boolean};
export function Divider(props:DividerProps) {
    return (
        <StyledDivider darkMode={props.darkMode}/>
    )
}

const StyledDivider = styled.div<DividerProps>``
import styled from 'styled-components'
import type {TypographiesProps} from '@/types'
import {pxTORem} from '@/utils'


export const StyledH1 = styled.h1<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => (props.size || pxTORem(24))};
    font-weight: ${(props) => (props.weight || pxTORem(600))};
    line-height: ${(props) => (props.lineHeight || pxTORem(36))};
    letter-spacing: ${pxTORem(-1)};
`

export const StyledH2 = styled.h2<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => (props.size || pxTORem(16))};
    font-weight: ${(props) => (props.weight || pxTORem(600))};
    line-height: ${(props) => (props.lineHeight || pxTORem(24))};
`

export const StyledP = styled.p<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => (props.size || pxTORem(16))};
    font-weight: ${(props) => (props.weight || pxTORem(400))};
    line-height: ${(props) => (props.lineHeight || pxTORem(24))};
`

export const StyledSpan = styled.span<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => (props.size || pxTORem(16))};
    font-weight: ${(props) => (props.weight || pxTORem(400))};
    line-height: ${(props) => (props.lineHeight || pxTORem(24))};
`

export const StyledUl = styled.ul<TypographiesProps>`
    color: ${(props) => props.color || 'inherit'};
    font-size: ${(props) => (props.size || pxTORem(16))};
    font-weight: ${(props) => (props.weight || pxTORem(400))};
    line-height: ${(props) => (props.lineHeight || pxTORem(24))};
    list-style-position: inside;
    li {
        list-style-position: inside;
        margin-left: ${pxTORem(15)};
`
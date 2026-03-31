import { pxTORem } from '@/utils'
import styled from 'styled-components'


export const CardComponent = styled.div`
    background-color: ${(props) => props.theme.card.background};
    border: ${pxTORem(1)} solid ${(props) => props.theme.card.border};
    boder-radius: ${pxTORem(8)};
    box-sizing: border-box;
    padding: ${pxTORem(24)};
    width: 100%;
    &.alert {
        background-color: ${(props) => props.theme.card.alert};
        border-color: ${(props) => props.theme.card.alert};
    }
    &.success {
        background-color: ${(props) => props.theme.card.success};
        border-color: ${(props) => props.theme.card.success};
    }
    &.warning {
        background-color: ${(props) => props.theme.card.warning};
        border-color: ${(props) => props.theme.card.warning};
    }
        a{
        color: inherit;
        text-decoration: none;
    }
`
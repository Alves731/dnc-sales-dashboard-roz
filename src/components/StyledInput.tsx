import styled from 'styled-components'
import type { InputProps } from '@/types'
import { pxTORem } from '@/utils'



export const StyledInput = styled.input<InputProps>`
background-color: ${(props) => props.theme.textInput.active};
color: ${(props) => props.theme.textInput.activeColor};
border-radius: ${pxTORem(8)};
border-radius: ${pxTORem(1)} solid ${(props) => props.theme.textInput.borderColor};
box-sizing: border-box;
font-size: ${pxTORem(14)};
height: ${pxTORem(40)};
padding: ${pxTORem(8)} ${pxTORem(16)};
cursor: pointer;
font-weight: 500;
transition: border-color 0.3s;
width: 100%;

  &:disabled {
    background-color: ${(props) => props.theme.textInput.disabled};
    border: ${pxTORem(1)} solid ${(props) => props.theme.textInput.disabledBorderColor};
    color: ${(props) => props.theme.textInput.disabledColor};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.textInput.placeholderColor};
  }
`

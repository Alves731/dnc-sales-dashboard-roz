import styled from 'styled-components'
import { pxTORem } from '@/utils'


export const Logo = styled.figure<{height: number; width: number}>`
    background-image: url(./${(props) => props.theme.appLogo});
    background-size: cover;
    height: ${(props) => pxTORem(props.height)};
    width: ${(props) => pxTORem(props.width)};
`
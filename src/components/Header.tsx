import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Avatar, Box, Container } from '@mui/material'
import { pxTORem } from '@/utils'
import { Logo } from '@/components'


const StyledHeader = styled.header`
    background-color: ${props => props.theme.appBackground};
    border-bottom: ${pxTORem(1)} solid ${props => props.theme.appDefaultStroke};
    margin-bottom: ${pxTORem(37)};
    background-size: cover;
    width: 100%;
`

function Header() {
    return (
        <StyledHeader>
            <Container maxWidth="lg">
                <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', height: pxTORem(64)}}>
                    <Link to="/home">
                        <Logo height={30} width={73} />
                    </Link>
                    <Link to="/perfil">
                        <Avatar alt="DNC Avatar" src="/dnc-avatar.svg" sx={{ width: pxTORem(40), height: pxTORem(40) }} />
                    </Link>
                </Box>
            </Container>
        </StyledHeader>
    )
}

export default Header
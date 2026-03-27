import { Box, Container, Grid } from "@mui/material"
import { BannerImage, FormComponent, Logo, StyledH1, StyledP, StyledUl } from "@/components"
import { pxTORem } from "@/utils";

function Registration() {
  return (
    <>
      <Box>
        <Grid container>
             <Grid size={{xs:12, sm:6}} sx={{ alignItems: 'center', display: 'flex', height:'100vh'}}>
                <Container maxWidth="sm">
                  <Box sx={{ marginBottom: pxTORem(24)}}><Logo height={41} width={100}/></Box>
                  <Box sx={{ marginBottom: pxTORem(24)}}>
                    <StyledH1>Faça seu cadastro</StyledH1>
                    <StyledP>Primeiro, giga-nos quem você é.</StyledP>
                    <StyledUl>
                      <li>Entre 8 e 16 caracteres;</li>
                      <li>pelo menos uma letra maiúscula;</li>
                      <li>pelo menos um caractere especial.</li>
                      <li>pelo menos um número;</li>
                    </StyledUl>
                  </Box>
                  <FormComponent 
                    inputs={[
                      { type: 'email', placeholder: 'Email'},
                      { type: 'password', placeholder: 'Senha'}
                    ]}
                    buttons={[
                      { className: 'primary', type: 'submit', children: 'Login'},
                    ]}
                    message={{
                      msg: 'Erro!!!',
                      type: 'error',
                    }}
                  />
                </Container>
            </Grid> 
            <Grid size={{sm:6}} sx={{ display: {xs: 'none', sm: 'block'}}}>
              <BannerImage />
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
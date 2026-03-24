import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle} from '@styles/globalStyle.ts'
import { lighTheme} from '@styles/theme.ts'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lighTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
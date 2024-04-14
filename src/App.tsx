import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Router } from './Router.tsx'
import { HashRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/CyclesContext.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter basename={'/Trilha-Ignite-Projeto-02/'}>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

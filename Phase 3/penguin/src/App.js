import React from 'react'
import LandingPage from './containers/landingPage'
import{ ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { LightTheme, DarkTheme } from './styles/theme'
import LoginPage from './containers/loginPage'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;

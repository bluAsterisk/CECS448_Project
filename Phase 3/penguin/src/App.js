import React from 'react'
import LandingPage from './components/LandingPage/landingPage'
import LoginPage from './components/LoginPage/loginPage'
import{ ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { LightTheme, DarkTheme } from './styles/theme'


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
        <GlobalStyles />
        <LoginPage />
    </ThemeProvider>
  );
}

export default App;

import React from 'react'
import LandingPage from './containers/LandingPage'
import{ ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { LightTheme, DarkTheme } from './styles/theme'


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
        <GlobalStyles />
        <LandingPage />
    </ThemeProvider>
  );
}

export default App;

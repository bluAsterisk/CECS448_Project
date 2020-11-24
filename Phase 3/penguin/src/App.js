import React from 'react'
import LandingPage from './components/LandingPage/landingPage'
import{ ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { LightTheme, DarkTheme } from './styles/theme'
import LoginPage from './components/LoginPage/loginPage'
import DashboardPage from './components/DashboardPage/dashboardPage'
import RegistrationPage from './components/RegistrationPage/registrationPage'
import {BrowserRouter as Router} from 'react-router-dom'
import Routing from './Routing'



function App() {
  return (
    <ThemeProvider theme={LightTheme}>
        <GlobalStyles />
        {/* <RegistrationPage /> */}
        <Router><Routing/></Router>
    </ThemeProvider>
  );
}

export default App;

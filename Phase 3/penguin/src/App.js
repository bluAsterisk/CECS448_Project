import React from 'react'
import{ ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { LightTheme, DarkTheme } from './styles/theme'
import {BrowserRouter as Router} from 'react-router-dom'
import Routing from './Routing'
import {withAuthentication} from './components/Session'


const App = () => (

        <ThemeProvider theme={LightTheme}>
            <GlobalStyles />
            <Router><Routing/></Router>
          </ThemeProvider>
    );

export default  withAuthentication(App);

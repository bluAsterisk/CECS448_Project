import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LoginPage from '../LoginPage/loginPage'

const theme = createMuiTheme({
    palette: {
      default:{
        main: '#6CA0FF',
        contrastText: '#FFFFFF',
      },
      primary: {
        main: '#9EC1FF',
        contrastText: '#FFFFFF',
      },
      secondary: {
          main: '#9A9DA6',
          contrastText: '#FFFFFF',
      },
    },
    shadows: Array(25).fill('none'),
    typography: {
        fontFamily: 'Pier Sans',
        fontStyle: 'normal',
        fontWeight: 'Bold',
        fontSize: 20,
      },
  });

const LoginContainer = styled.div`
    position: absolute;
    width: 150px;
    height: 50px;
    left: 166px;
    top: 424px;
`
const SignUpContainer = styled.div`
    position: absolute;
    width: 150px;
    height: 50px;
    left: 335px;
    top: 424px;
`
const GetStartedContainer = styled.div`
    position: absolute;
    width: 190px;
    height: 50px;
    right: 30px;
    top: 21px;
`
function Buttons(){
    return(
        <div>
            <BrowserRouter>
            <GetStartedContainer>
                <Button variant="contained" id="getStarted" theme="palette.default" >Get Started</Button>
            </GetStartedContainer>
            <LoginContainer>
                <Button variant="contained" id="login" theme="palette.primary">Login 
                </Button>
            </LoginContainer>
            <SignUpContainer>
            <Button variant= "contained" id="signup" theme="primary">Sign Up</Button>
            </SignUpContainer>
            </BrowserRouter>
        </div>
    );
}
export default Buttons
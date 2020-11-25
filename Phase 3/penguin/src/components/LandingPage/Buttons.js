import React from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'
import {LoginPage, RegistrationPage } from '../../Routing'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import loginPage from '../LoginPage/loginPage'

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
        <MuiThemeProvider>
                <GetStartedContainer>
                    <Button
                        style={{maxWidth: '190px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', fontSize: '20px'}} 
                        variant="contained" 
                        id="getStarted"
                        size="large" 
                        color="primary" >
                            Get Started
                    </Button>
                </GetStartedContainer>
                <LoginContainer>
                    <Button
                        style={{maxWidth: '150px', maxHeight: '50px', minWidth: '150px', minHeight: '50px', fontSize: '22px'}} 
                        variant="contained" 
                        id="login" 
                        size="large" 
                        color="secondary"
                        component={Link} to={LoginPage}
                        >
                            Login
                    </Button>
                </LoginContainer>
                <SignUpContainer>
                    <Button
                        style={{maxWidth: '150px', maxHeight: '50px', minWidth: '150px', minHeight: '50px', fontSize: '22px'}}  
                        variant= "contained" 
                        id="signup" 
                        size="large" 
                        component={Link} to={RegistrationPage}
                        color="primary">
                            Sign Up
                    </Button>
                </SignUpContainer>
        </MuiThemeProvider>
    );
}
export default Buttons
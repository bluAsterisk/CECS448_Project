import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import Button from '@material-ui/core/Button';

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
                    <Button variant='contained' id="getStarted" theme='default'>Get Started</Button>
                </GetStartedContainer>
                <LoginContainer>
                    <Button variant='contained' id="login">Login
                        {/*<Route path='/' component={LoginPage} />*/}
                    </Button>
                </LoginContainer>
                <SignUpContainer>
                    <Button variant= 'contained' id="signup">Sign Up</Button>
                </SignUpContainer>
            </BrowserRouter>
        </div>
    );
}
export default Buttons
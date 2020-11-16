import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginPage from '../../containers/loginPage'

const LoginContainer = styled.div`
    position: absolute;
    width: 150px;
    height: 50px;
    left: 166px;
    top: 424px;

    background: #9A9DA6;
    border: 1px solid #9A9DA6;
    box-sizing: border-box;
    border-radius: 10px;
`
const Text = styled.div`
    text-align: center;
    vertical-align: middle;
    font-family: Pier Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 40px;
    color: #FFFFFF;
`
const SignUpContainer = styled.div`
    position: absolute;
    width: 150px;
    height: 50px;
    left: 335px;
    top: 424px;

    background: #6CA0FF;
    border: 1px solid #6CA0FF;
    box-sizing: border-box;
    border-radius: 10px;
`
const GetStartedContainer = styled.div`
    position: absolute;
    width: 190px;
    height: 50px;
    right: 30px;
    top: 21px;

    background: #6CA0FF;
    border: 1px solid #6CA0FF;
    box-sizing: border-box;
    border-radius: 10px;
`
function Buttons(){
    return(
        <div>
            <BrowserRouter>
                <GetStartedContainer>
                    <Text>Get Started</Text>
                </GetStartedContainer>
                <LoginContainer>
                    <Text>Login
                        {/*<Route path='/' component={LoginPage} />*/}
                    </Text>
                </LoginContainer>
                <SignUpContainer>
                    <Text>Sign Up</Text>
                </SignUpContainer>
            </BrowserRouter>
        </div>
    );
}
export default Buttons
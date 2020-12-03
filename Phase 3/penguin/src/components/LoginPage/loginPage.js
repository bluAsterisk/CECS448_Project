import React from 'react'
import Logo from '../Header/Logo'
import Buttons from './Buttons'
import TextField from '@material-ui/core/TextField';
import TextFieldPassword from './TextFieldPassword'
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SideBar from '../RegistrationPage/SideBar';
import styled from 'styled-components'
import Box from '@material-ui/core/Box'


const LoginText = styled.h1`
    font-size:40px;
    font-weight:bold;
    box-sizing:border-box;

`


function LoginPage(){
    return(
        <div>
            <Box m = {2}>
                <Grid container
                direction="row" 
                justify="left"
                alignItems="center">
                    <Grid item>
                        <Logo/>
                    </Grid>
                </Grid>
            </Box>
            <SideBar />
            <Grid 
                container 
                direction = "column"
                justify ='center' 
                alignItems="center" 
                spacing = {6}
                style={{ minHeight: '80vh' }}>
                <Grid item>
                    <LoginText>Login</LoginText>
                </Grid>
                <Grid item>
                    <TextFieldPassword />
                </Grid>
                <Grid item>
                    <Buttons />
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginPage
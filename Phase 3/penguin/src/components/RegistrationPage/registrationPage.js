import React from 'react'
import Logo from '../Header/Logo'
import AlternateSignupButtons from './AlternateSignupButtons'
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid'
import RegistrationForm from './RegistrationForm'
import AlreadyHaveAccount from './AlreadyHaveAccount'
import { withFirebase } from '../Firebase';
import styled from 'styled-components'
import Box from '@material-ui/core/Box'



const RegisterText = styled.h1`
    left: 31%;
    top: 14%;
    font-size:40px;
    font-weight: bold;
    box-sizing: border-box;

`


function RegistrationPage(){
    return(
        <div>
            <Box m = {2}>
                <Grid container
                direction="row" 
                justify="left"
                alignItems="center">
                    <Grid item>
                        <Logo />
                    </Grid>
                </Grid>
            </Box>
            <SideBar/>
            <Grid container spacing = {6} direction = "column" justify="center" alignItems="center">
            
                <Grid item>
                    <RegisterText>Register</RegisterText>
                </Grid>

                <Grid item>
                    <AlternateSignupButtons/>
                </Grid>
                <Grid item>
                   <RegistrationForm/>
                </Grid>
                <Grid item>
                    <AlreadyHaveAccount/>
                </Grid>
            </Grid>
        </div>
    );
}

export default RegistrationPage
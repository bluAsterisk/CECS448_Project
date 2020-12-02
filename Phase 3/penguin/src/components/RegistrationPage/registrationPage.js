import React from 'react'
import Logo from '../Header/Logo'
import AlternateSignupButtons from './AlternateSignupButtons'
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid'
import RegistrationForm from './RegistrationForm'
import AlreadyHaveAccount from './AlreadyHaveAccount'
import { withFirebase } from '../Firebase';



function RegistrationPage(){
    return(
        <div>
            <Grid container
            direction="row" 
            justify="leflex-start"
            alignItems="center">
                <Grid item>
                    <Logo/>
                </Grid>
            </Grid>
           
            <SideBar/>
            <Grid container spacing = {6} direction = "column" justify="center" alignItems="center">
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
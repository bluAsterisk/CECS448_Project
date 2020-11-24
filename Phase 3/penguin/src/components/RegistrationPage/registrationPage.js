import React from 'react'
import Header from '../Header/Header'
import AlternateSignupButtons from './AlternateSignupButtons'
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid'
import RegistrationForm from './RegistrationForm'
import AlreadyHaveAccount from './AlreadyHaveAccount'
import {LoginPage} from '../../Routing'

function RegistrationPage(){
    return(
        <div>
            <Header/>
            <SideBar/>
            <Grid container spacing = {0} direction = "column" justify="center" alignItems="center">
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
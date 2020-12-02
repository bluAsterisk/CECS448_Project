import React from 'react'
import Logo from '../Header/Logo'
import Buttons from './Buttons'
import TextField from '@material-ui/core/TextField';
import TextFieldPassword from './TextFieldPassword'
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SideBar from '../RegistrationPage/SideBar';


function LoginPage(){
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
            <SideBar />
            <Grid 
                container 
                justify ='center' 
                alignItems="center" 
                style={{ minHeight: '100vh' }}>
                <Grid item>
                    <TextField id="input-with-icon-grid" label="Username" />
                    <AccountCircle />
                    <TextFieldPassword />
                    <h2><br/></h2>
                    <Buttons />
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginPage
import React from 'react'
import Buttons from './Buttons'
import TextField from '@material-ui/core/TextField';
import TextFieldPassword from './TextFieldPassword'
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';


function LoginPage(){
    return(
        <div>
            <Grid container spacing={0} justify ='center' alignItems="center">
                <Grid item>
                    <TextField id="input-with-icon-grid" label="Username" />
                    <AccountCircle />
                    <TextFieldPassword />
                    <Buttons />
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginPage
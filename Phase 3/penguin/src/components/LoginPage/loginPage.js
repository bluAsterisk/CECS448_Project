import React from 'react'
import TextFieldPassword from './TextFieldPassword'
import Buttons from './Buttons'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';


function LoginPage(){
    return(
        <div>
            <Grid container spacing={1} justify ='center' alignItems="center">
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
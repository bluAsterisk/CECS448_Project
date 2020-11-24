import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'


function Buttons(){
    return(
        <div>
            <Grid 
                container 
                justify="center"
                alignItems="center" 
                spacing={2}>
                <Grid item>
                    <Button 
                        variant='contained' 
                        size = "large"
                        id="login" 
                        color="secondary"
                        component={Link} to='/dashboard'>Login
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant= 'contained'
                        size = "large" 
                        id="signup" 
                        color = "primary"
                        component={Link}to='/registration'>Sign Up
                    </Button>
                </Grid>
            </Grid>
            <Grid item>
                    <h2>————— OR —————</h2>
                </Grid> 
            <Grid  
                container 
                direction="row"
                justify="center"
                alignItems="center" 
                spacing={2}>
                <Grid item>
                    <Button
                        variant= 'contained'
                        size = "large" 
                        id="signup" 
                        color = "primary">Login with Facebook
                    </Button>
                </Grid>
            </Grid>
            <Grid 
                container 
                direction="row"
                justify="center"
                alignItems="center" 
                spacing={2}>
                <Grid item>
                    <Button
                        variant= 'contained'
                        size = "large" 
                        id="signup" 
                        color = "primary">Login with Google
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default Buttons
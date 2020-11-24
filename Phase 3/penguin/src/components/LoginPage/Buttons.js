import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';


function Buttons(){
    return(
        <div>
            <Grid container>
                <Grid item>
                    <Button 
                        variant='contained' 
                        size = "large"
                        id="login" 
                        color="secondary"
                        to='/login'>Login
                    </Button>
                    <Button
                        variant= 'contained'
                        size = "large" 
                        id="signup" 
                        color = "primary">Sign Up
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Button
                        variant= 'contained'
                        size = "large" 
                        id="signup" 
                        color = "primary">Login with Facebook
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
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
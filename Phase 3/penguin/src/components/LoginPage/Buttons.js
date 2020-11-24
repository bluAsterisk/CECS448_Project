import React from 'react'
import Button from '@material-ui/core/Button'

function Buttons(){
    return(
        <div>
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
        </div>
    );
}
export default Buttons
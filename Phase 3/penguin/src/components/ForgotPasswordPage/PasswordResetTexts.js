import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

const ForgotYourPassword = styled.h1`
font-weight:750;
font-size:36px;
`
const Subtext = styled.h2`
font-size:26px;
font-weight:200;
width:400px;
`


function PasswordResetText()
{
    return(
        <div>
            <Grid container 
            spacing={4}
            direction = "column"
            justify= "center"
            alignItems="center">
                <Grid item>
                    <ForgotYourPassword>
                        Forgot Your Password?
                    </ForgotYourPassword>
                </Grid>
                <Grid item>
                    <Subtext>
                        Enter your email and we'll send you a link to reset your password
                    </Subtext>
                </Grid>

            </Grid>

        </div>
    );
}


export default PasswordResetText;
import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {compose} from 'recompose'
import {withFirebase} from '../Firebase'
import Box from '@material-ui/core/Box'
import Logo from '../Header/Logo'
import PasswordResetText from './PasswordResetTexts'
import PasswordInput from './PasswordInput'
import Linker from '@material-ui/core/Link'
import {LoginPage} from '../../Routing'




const ForgotPasswordPage = () => (
    <ForgotPassword/>
)


const INITIAL_STATE = {
    email: '',
    error:null,
};

const BackToLogin = styled.div`
    font-size:18px;
    color:#1E90FF;
`

class ForgotPasswordBase extends Component{
    constructor(props)
    {
        super(props);

        this.state={...INITIAL_STATE};
    }



    render(){

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

                <Grid container
                direction= "column"
                justify="center"
                spacing = {4}
                alignItems="center">
                    <Grid item>
                        <PasswordResetText/>
                    </Grid>
                    <Grid item>
                        <PasswordInput/>
                    </Grid>
                    <Grid item>
                        <BackToLogin>
                            <Linker component = {Link} to = {LoginPage}>
                                 Back To Login
                            </Linker>
                        </BackToLogin>
                    </Grid>

                </Grid>



            </div>
        );
    }
}

const ForgotPassword = compose(
    withRouter,
    withFirebase,
)(ForgotPasswordBase);

export default ForgotPasswordPage;

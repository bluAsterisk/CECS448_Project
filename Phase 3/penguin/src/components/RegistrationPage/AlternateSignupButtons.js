import React from 'react'
import Button from '@material-ui/core/Button'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import {sizing} from '@material-ui/system'
import {LoginPage} from '../../Routing'
import {Link} from 'react-router-dom'


const RegisterText = styled.h1`
    left: 31%;
    top: 14%;
    font-size:40px;
    font-weight: bold;
    box-sizing: border-box;

`

const FacebookContainer = styled.div`
    width: 295px;
    height: 60px;
    margin: 0px;
    box-sizing: border-box;

`

const GoogleContainer = styled.div`
    width: 295px;
    height: 60px;  
    box-sizing: border-box;
`

function AlternateSignupButtons(){
    return(
        <BrowserRouter>
            <div>
                <Grid container spacing = {2} direction="column" alignItems= "center" justify="center">
                <Grid item>
                    <RegisterText>Register</RegisterText>
                </Grid>
                <Grid container item spacing = {8} direction="row" alignItems="center" justify="center">
                    <Grid item>
                        <FacebookContainer>
                            <Button variant="contained" 
                            color="primary"
                            id="FacebookButton"
                            style={{textTransform: 'none', 
                                    borderRadius:'12px', 
                                    fontSize: '21px', 
                                    minHeight: '100%', 
                                    minWidth: '100%'}}>Sign up With Facebook
                            </Button>
                        </FacebookContainer>
                    </Grid>
                    <Grid item>
                    <GoogleContainer>
                        <Button variant="contained" 
                        color="primary" 
                        id="GoogleButton"
                        component={Link} to={LoginPage}
                        style={{textTransform: 'none', 
                                backgroundColor: '#1E90FF', 
                                borderRadius:'12px', 
                                fontSize: '21px', 
                                minHeight: '100%', 
                                minWidth: '100%'}}>Sign up With Google
                        </Button>
                    </GoogleContainer>
                    </Grid>
                    </Grid>
                </Grid>
            </div>
        </BrowserRouter>
    );
}

export default AlternateSignupButtons
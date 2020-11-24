import React from 'react'
import styled from 'styled-components'
import InputAdornment from '@material-ui/core/InputAdornment'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Person from '@material-ui/icons/Person'
import PersonAdd from '@material-ui/icons/PersonAdd'
import Email from '@material-ui/icons/Email'
import Lock from '@material-ui/icons/Lock'
import Button from '@material-ui/core/Button'
import {LoginPage} from '../../Routing'
import {Link} from 'react-router-dom'

export default function RegistrationForm(){
    
const CreateAccountContainer = styled.div`
    width: 240px;
    height: 60px;
    box-sizing: border-box;
`

    return (
        <div>
           
            <Grid container spacing = {6} direction = "column" alignItems = "center" justify = "center">      
                <Grid item>
                    <h2>———————————— OR ————————————</h2>
                </Grid>      
                <Grid container item spacing = {8} direction = "row" alignItems = "center" justify = "center">
                    <Grid item>
                        <TextField id ="full-name" variant="filled" label="Full Name" InputProps={{
                            startAdornment: (<InputAdornment position = "start">
                            <Person/>
                            </InputAdornment> 
                                ), 
                            }}
                        />
                    </Grid> 
                        <Grid item>
                            <TextField id="user-name" variant="filled" label="Username" InputProps={{
                                startAdornment: (<InputAdornment position = "start">
                                    <PersonAdd/>
                                </InputAdornment>
                                    ),
                                }}
                            />
                    </Grid>
                </Grid>
                <Grid item>
                    <TextField  id="email" variant="filled" label="Email" InputProps= {{
                        startAdornment: ( <InputAdornment position = "start">
                            <Email/>
                        </InputAdornment>
                        ),
                    }}
                    style={{
                        position: 'relative',
                        right: '64%',
                        width: '228%'
                    }}
                    />
                </Grid>
                <Grid container item spacing = {8} direction = "row" alignItems = "center" justify = "center">
                    <Grid item>
                        <TextField id="password" variant="filled" label="Password" InputProps={{
                                    startAdornment: (<InputAdornment position = "start">
                                        <Lock/>
                                    </InputAdornment>
                                        ),
                                    }}
                                />
                    </Grid>
                    <Grid item>
                    <TextField id="password-confirm" variant="filled" label="Retype Password" InputProps={{
                                startAdornment: (<InputAdornment position = "start">
                                    <Lock/>
                                </InputAdornment>
                                    ),
                                }}
                            />
                    </Grid>
                </Grid>
                <Grid item>
                    <CreateAccountContainer>
                        <Button variant = "contained"
                        color="secondary"
                        id="CreateAccountButton"
                        component={Link} to={LoginPage}
                        style={{
                            backgroundColor: '#1E90FF',
                            minHeight: '100%',
                            minWidth: '100%',
                            right:'62%',
                        }}
                        >
                            Create Account
                        </Button>
                    </CreateAccountContainer>
                </Grid>               
            </Grid>
        </div>
            
    );
}


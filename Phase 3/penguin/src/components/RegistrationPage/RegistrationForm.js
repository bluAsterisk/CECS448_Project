import React, {Component} from 'react'
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
import {Link, withRouter} from 'react-router-dom'
import * as ROUTES from '../../Routing'
import {withFirebase} from '../Firebase'
import {compose} from 'recompose'

    
const CreateAccountContainer = styled.div`
    width: 240px;
    height: 60px;
    box-sizing: border-box;
`
const RegistrationForm = () => (
    <Registration/>
)

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    password2: '',
    error:null,

};

class RegistrationBase extends Component{
    constructor(props) {
        super(props);
        
        this.state={...INITIAL_STATE};
    }

    onSubmit = event => {
        const {username, email, password } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ... INITIAL_STATE });
                this.props.history.push(ROUTES.LoginPage);
            })
            .catch(error => {
                this.setState({error});
            });
        
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    };

    render() {
        const{
            username,
            email,
            password,
            password2,
            fullname,
            error,
        } = this.state;
    
        const isInvalid = 
            password !== password2 ||
            password === '' ||
            email === '' ||
            fullname ==='' ||
            username === '';
            
    
            return (
                <form onSubmit = {this.onSubmit}>
                <div>
                    <Grid container spacing = {6} direction = "column" alignItems = "center" justify = "center">      
                        <Grid item>
                            <h2>———————————— OR ————————————</h2>
                        </Grid>      
                        <Grid container item spacing = {8} direction = "row" alignItems = "center" justify = "center">
                            <Grid item>
                                <TextField id ="fullname" 
                                variant="filled" 
                                label="Full Name" 
                                name="fullname"
                                value={fullname}
                                onChange={this.onChange}
                                InputProps={{
                                    startAdornment: (<InputAdornment position = "start">
                                    <Person/>
                                    </InputAdornment> 
                                        ), 
                                    }}
                                />
                            </Grid> 
                                <Grid item>
                                    <TextField id="username" 
                                    variant="filled" 
                                    name="username"
                                    value={username}
                                    onChange={this.onChange}
                                    label="Username" 
                                    InputProps={{
                                        startAdornment: (<InputAdornment position = "start">
                                            <PersonAdd/>
                                        </InputAdornment>
                                            ),
                                        }}
                                    />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField  id="email" 
                            variant="filled" 
                            name="email"
                            label="Email" 
                            value={email}
                            onChange = {this.onChange}
                            InputProps= {{
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
                                <TextField id="password" 
                                variant="filled" 
                                name="password"
                                label="Password" 
                                onChange= {this.onChange}
                                value={password}
                                type="password"
                                InputProps={{
                                            startAdornment: (<InputAdornment position = "start">
                                                <Lock/>
                                            </InputAdornment>
                                                ),
                                            }}
                                        />
                            </Grid>
                            <Grid item>
                            <TextField id="password2" 
                            variant="filled" 
                            name="password2"
                            label="Retype Password" 
                            onChange = {this.onChange}
                            value={password2}
                            type="password"
                            InputProps={{
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
                                name="CreateAccountButton"
                                id="CreateAccountButton"
                                disabled = {isInvalid} type = "submit"
                                // component={Link} to={LoginPage}
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
                        <Grid item>
                            {error && <p>{error.message}</p>}
                            </Grid>            
                    </Grid>
                </div>
                </form>
                    
            );
        }

    }

const Registration = compose(
    withRouter,
    withFirebase,
    )(RegistrationBase);


export default RegistrationForm;


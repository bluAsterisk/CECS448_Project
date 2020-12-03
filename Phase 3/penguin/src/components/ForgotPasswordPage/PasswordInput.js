import React, {Component} from 'react'
import styled from 'styled-components'
import {withFirebase} from '../Firebase'
import {compose} from 'recompose'
import {withRouter} from 'react-router-dom'
import Email from '@material-ui/icons/Email'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


const PasswordInput = () => (
    <PasswordForm/>
);

const INITIAL_STATE = {
    email: '',
    error:null,
};


class PasswordBase extends Component{

    constructor(props){
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onChange=event => {
        this.setState({ [event.target.name] : event.target.value});
    };

    onSubmit = event => {
        const {email} = this.state;

        this.props.firebase
        .auth.sendPasswordResetEmail(email).then(function() {
            this.setState({...INITIAL_STATE});
        }).catch(function(error){
            this.setState({error});
        });
    }

    render(){

        const{
            email,
            error,
        } = this.state;

        const isInvalid = 
        email=='';

        return(
            <div>
                <form onSubmit = {this.onSubmit}>
                <Grid container 
                direction = "row"
                spacing = {2}
                justify = "center"
                alignItems = "center">
                    <Grid item>
                        <TextField id="email"
                        variant="filled"
                        name="email"
                        label="Email"
                        style={{
                            width:500,
                        }}
                        value={email}
                        onChange={this.onChange}
                        InputProps={{
                            startAdornment: (<InputAdornment position = "start">
                                <Email/>
                            </InputAdornment>)
                        }}/>
                    </Grid>

                    <Grid item>
                        <Button variant = "contained"
                        color="secondary"
                        name="SendLink"
                        id="SendLink"
                        disabled={isInvalid}
                        style={{
                            minHeight: '56px',
                            left:'20%',
                            backgroundColor:'#1E90FF',
                            color:'white'
                        }}
                        type="submit">
                            Send Link
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </div>
        );

    }

}


const PasswordForm = compose(
    withFirebase,
    withRouter)(PasswordBase);


export default PasswordInput;
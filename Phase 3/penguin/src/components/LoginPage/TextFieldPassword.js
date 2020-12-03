import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase'
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {compose} from 'recompose'
import {DashboardPage} from '../../Routing'
import Lock from '@material-ui/icons/Lock'
import Person from '@material-ui/icons/Person'
import Visible from '@material-ui/icons/Visibility'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(0),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const TextFieldPassword = () => (
  <Login/>
)

const INITIAL_STATE = {
  email:'',
  password:'',
  error:null,
  visible:'false',
}


const LoginContainer = styled.div`
    width: 240px;
    height: 50px;
    box-sizing: border-box;
`



// const handleChange = (prop) => (event) => {
//   setValues({ ...values, [prop]: event.target.value });
// };

// const handleClickShowPassword = () => {
//   setValues({ ...values, visible: !values.visible });
// };

// const handleMouseDownPassword = (event) => {
//   event.preventDefault();
// };


class LoginForm extends Component{
  // classes = useStyles();

  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const{email,password} = this.state;

    this.props.firebase
    .doSignInWithEmailAndPassword(email,password)
    .then(() => {
      this.setState({...INITIAL_STATE});
      this.props.history.push(DashboardPage);
    })
    .catch(error=> {
      this.setState({error});

    });

    event.preventDefault();
  };

  onChange = event=> {
    this.setState({ [event.target.name] : event.target.value});

  };

  

    render() {
      const{
        email,
        password,
        visible,
      } = this.state;

      const isInvalid = password ==='' || email ==='';

      return (
        <form onSubmit = {this.onSubmit}>
        <div>
            {/* <FormControl className={clsx(classes.margin, classes.textField)}> */}

              <Grid container
                spacing = {4}
                direction = "column"
                alignItems = "center"
                justify = "center"
                >

                  <Grid item>
                    <TextField id = "email"
                    variant = "filled"
                    label = "Email"
                    name = "email"
                    value = {email}
                    onChange = {this.onChange}
                    InputProps = {{
                      startAdornment: (<InputAdornment position = "start">
                        <IconButton disabled="true">
                          <Person/>
                        </IconButton>
                        </InputAdornment> 
                      ),
                    }}
                    />
                  </Grid>
                  <Grid item>
                  <TextField id = "password"
                    variant = "filled"
                    label = "Password"
                    name = "password"
                    type = {visible ? "password" : "text"}
                    value = {password}
                    onChange = {this.onChange}
                    InputProps = {{
                      startAdornment: (<InputAdornment position = "start"
                      >
                        <IconButton onClick = {(e) => this.setState( prevState => ({visible : !prevState.visible}))}>
                          <Lock/>
                        </IconButton>
                        </InputAdornment> 
                      ),
                    }}
                    />
                  </Grid>

                  <Grid item>
                    <LoginContainer>
                        <Button 
                            variant='contained' 
                            id="login" 
                            color = "primary"
                            type="submit"
                            disabled={isInvalid}
                            style={{
                                textTransform: 'none',
                                backgroundColor: '#66b3ff',
                                borderRadius: '12px',
                                fontSize: '22px',
                                minHeight: '100%',
                                minWidth: '100%'
                            }}>Login
                        </Button>
                    </LoginContainer>
                </Grid>
              </Grid>
          </div>
          </form>
      );
    };

  
}

const Login = compose(
  withRouter,
  withFirebase,)(LoginForm);

export default TextFieldPassword;
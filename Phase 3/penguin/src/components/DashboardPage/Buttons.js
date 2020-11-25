import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { HomeRoute } from '../../Routing'


const theme = createMuiTheme({
    palette: {
      default:{
        main: '#6CA0FF',
        contrastText: '#FFFFFF',
      },
      primary: {
        main: '#9EC1FF',
        contrastText: '#FFFFFF',
      },
      secondary: {
          main: '#9A9DA6',
          contrastText: '#FFFFFF',
      },
    },
    shadows: Array(25).fill('none'),
    typography: {
        fontFamily: 'Pier Sans',
        fontStyle: 'normal',
        fontWeight: 'Bold',
        fontSize: 20,
      },
  });

function Buttons(){
    return(
        <MuiThemeProvider>   
               <Grid 
                container 
                justify="center"
                alignItems="center" 
                spacing={1}>
                <Grid item>
                    <Button 
                        variant='contained' 
                        size = "large"
                        id="login" 
                        color="secondary"
                        component={Link} to=''>Host a Meeting
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant= 'contained'
                        size = "large" 
                        id="signup" 
                        color = "primary"
                        component={Link}to=''>Join a Meeting
                    </Button>
                </Grid>
                </Grid>
        </MuiThemeProvider>
    );
}
export default Buttons
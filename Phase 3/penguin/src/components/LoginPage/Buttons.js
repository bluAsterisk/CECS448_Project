import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import styled from 'styled-components'


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


function Buttons(){
    return(
        <div>
            <Grid 
                container 
                direction = "column"
                justify="center"
                alignItems="center" 
                spacing={4}>
           
                <Grid item>
                    <h2>————— OR —————</h2>
                </Grid> 
                
                <Grid item>
                    <FacebookContainer>
                        <Button variant="contained" 
                            color="primary"
                            id="FacebookButton"
                            style={{textTransform: 'none', 
                                    borderRadius:'12px', 
                                    fontSize: '21px', 
                                    minHeight: '100%', 
                                    minWidth: '100%'}}>Login With Facebook
                        </Button>
                    </FacebookContainer>
                </Grid>
                <Grid item>
                    <GoogleContainer>
                        <Button variant="contained" 
                            color="primary" 
                            id="GoogleButton"
                            style={{textTransform: 'none', 
                                    backgroundColor: '#1E90FF', 
                                    borderRadius:'12px', 
                                    fontSize: '21px', 
                                    minHeight: '100%', 
                                    minWidth: '100%'}}>Login With Google
                        </Button>
                    </GoogleContainer>
                </Grid>
            </Grid>
        </div>
    );
}
export default Buttons
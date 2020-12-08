import React from 'react'
import Header from '../Header/Header'
import AccSettings from '../DashboardPage/AccSettings'
import WelcomeTxt from '../DashboardPage/WelcomeTxt'
import Buttons from '../DashboardPage/Buttons'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import LogOutButton from '../SignOut'
import Box from '@material-ui/core/Box'
import {withAuthorization} from '../Session'


const condition = authUser => !!authUser;

function DashboardPage(){
    return(
        <div>
            <Grid container 
            direction = "row"
            justify = "space-between"
            alignItems ="flex-start"
            wrap="wrap"
            >
                <Grid item>    
                    <Header />
                </Grid>
                <Grid item>
                    <Box p = {2}>
                        <Grid container spacing = {4}>
                            <Grid item>
                                <AccSettings/>
                            </Grid>
                            <Grid item>
                                <LogOutButton/>
                            </Grid>
                        </Grid>
                    </Box>
                    
                </Grid>


            </Grid>
            <Container maxWidth="sm"> 
                <center><WelcomeTxt></WelcomeTxt></center> 
            <Buttons />
            </Container>
        </div>
    );
}

export default withAuthorization(condition)(DashboardPage);
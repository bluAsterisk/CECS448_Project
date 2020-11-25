import React from 'react'
import Header from '../Header/Header'
import AccSettings from '../DashboardPage/AccSettings'
import WelcomeTxt from '../DashboardPage/WelcomeTxt'
import Buttons from '../DashboardPage/Buttons'
import Container from '@material-ui/core/Container';



function DashboardPage(){
    return(
        <div>
            <Header />
            <AccSettings />
            <Container maxWidth="sm"> 
            
            <center><WelcomeTxt></WelcomeTxt></center> 
            <Buttons />
            </Container>
        </div>
    );
}

export default DashboardPage
import React, {Component} from 'react'
import styled from 'styled-components'
import Image from '../../assests/images/penguinIcon.png'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import {DashboardPage, HomeRoute} from '../../Routing'
import { ButtonBase, requirePropFactory } from '@material-ui/core';
import { render } from 'react-dom';
import firebase, {withFirebase} from '../Firebase'


const Container = styled.div`
    margin-top: 17px;
    margin-left: 17px;
`
const PenguinIcon = styled.img`

`
const PenguinName = styled.div`
    font-family: "Pier Sans";
    font-style: normal;
    font-weight: bold;
    line-height: 43px;
    font-size: 36px;
    color: "#303030";
`

class Logo extends Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        // const loggedIn =  firebase.auth().onAuthStateChanged(function(user) {
        //     if(user)
        //     {
        //         this.loggedIn = {DashboardPage};
        //     }
        //     else
        //     {
        //         this.loggedIn = {HomeRoute};
        //     }
        // });


        return(
            <Grid 
                container 
                justify="center"
                alignItems="center" 
                spacing={1}>
                    <ButtonBase
                    component = {Link} to = {HomeRoute} > 
                    <Grid item><PenguinIcon src={Image} /></Grid>
                    <Grid item><PenguinName>Penguin</PenguinName></Grid>
                    </ButtonBase>
            </Grid>
        );
    }
}



export default withFirebase(Logo)
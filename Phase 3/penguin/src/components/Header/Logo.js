import React from 'react'
import styled from 'styled-components'
import Image from '../../assests/images/penguinIcon.png'
import Grid from '@material-ui/core/Grid';

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
function Logo(){
    return(
        
        <Grid 
            container 
            justify="center"
            alignItems="center" 
            spacing={1}>
                
                <Grid item><PenguinIcon src={Image} /></Grid>
                <Grid item><PenguinName>Penguin</PenguinName></Grid>

        </Grid>
    );
}
export default Logo
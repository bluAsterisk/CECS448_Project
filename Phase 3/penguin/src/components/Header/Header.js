import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Toggle from '../Toggle/switch'
import Grid from '@material-ui/core/Grid';

const Container = styled.div`
    padding: 15px;
`

const PenguinName = styled.div`
    position: absolute;
    font-family: "Pier Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: "#303030";
`

function Header(){
    return(
        <Container>
            <Grid 
            container
            direction="row" 
            justify="leflex-start"
            alignItems="center"
            spacing={4}>
                
                <Grid item><Logo /></Grid>
                <Grid item><Toggle/></Grid>

            </Grid>
        </Container>
        
        
    );
}

export default Header

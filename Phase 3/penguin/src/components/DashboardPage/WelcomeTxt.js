import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'

const Welcome = styled.div`
    font-family: Pier Sans;
    font-size: 60px;
    font-style: normal;
    font-weight: bold;
    padding-top: 25%;
    padding-bottom: 5%;
`

function WelcomeTxt(){
    return(
        <Welcome>Hello, John Smith</Welcome> 
    );
}

export default WelcomeTxt
import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'

const TextContainer = styled.div`
    position: absolute;    
    width: 50%;
    height: auto;
    left: calc(25%);
    right: calc(25%);
    top: calc(50%/2);
    margin-left: 15%;
`

const ButtonContainer = styled.div`
    position: absolute;    
    width: 50%;
    height: auto;
    top: 150%;
`

const Welcome = styled.div`
    font-family: Pier Sans;
    font-size: 60px;
    font-style: normal;
    font-weight: bold;
`

function WelcomeTxt(){
    return(
        <TextContainer>
            <Welcome>Hello, John Smith</Welcome> {/* Retrieve User's Name */}
            <ButtonContainer><Buttons /></ButtonContainer>
        </TextContainer>
    );
}

export default WelcomeTxt
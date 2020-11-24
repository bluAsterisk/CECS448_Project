import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
    position: absolute;    
    width: auto;
    height: auto;
    left: calc(50%);
    top: calc(50%/2);
    margin-left: -11%;
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
        </TextContainer>
    );
}

export default WelcomeTxt
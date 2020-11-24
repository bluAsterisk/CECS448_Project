import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
    position: absolute;    
    width: auto;
    height: auto;
    top: 50px;
`
const welcome = styled.div`
    font-family: Pier Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
`

function WelcomeTxt(){
    return(
        <TextContainer>
            <welcome>Hello,  <bold>John Smith{/* Retrieve User's Name */}</bold></welcome>
        </TextContainer>
    );
}

export default WelcomeTxt
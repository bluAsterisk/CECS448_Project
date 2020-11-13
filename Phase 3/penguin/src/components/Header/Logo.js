import React from 'react'
import styled from 'styled-components'
import Image from '../../assests/images/penguinIcon.png'

const Container = styled.div`
    margin-top: 17px;
    margin-left: 17px;
`
const PenguinIcon = styled.img`

`
const PenguinName = styled.div`
    position: absolute;
    width: 131px;
    height: 43px;
    left: 80px;
    top: 23px;
    font-family: "Pier Sans";
    font-style: normal;
    font-weight: bold;
    line-height: 43px;
    font-size: 36px;
`
function Logo(){
    return(
        <Container>
            <PenguinIcon src={Image} />
            <PenguinName>Penguin</PenguinName>
        </Container>
    );
}
export default Logo
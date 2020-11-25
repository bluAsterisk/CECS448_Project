import React from 'react'
import styled from 'styled-components'
import Image from '../../assests/images/monitor.png'

const Container = styled.div`
    background-color: #F5F5F5;
    position: absolute;
    height: 518px;
    right: 0px;
    left: 0px;
    top: 88px;
`

const Slogan = styled.div`
    position: absolute;
    width: 333px;
    height: 174px;
    left: 166px;
    top: 140px;
    font-family: Pier Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 58px;
`
const Monitor = styled.img`
    position: absolute;
    right: 160px;
    top: 70px;
`

function MiddleBackground(){
    return(
        <Container>
            <Slogan>Chat without ever having to miss a word</Slogan>
            <Monitor src={Image}/>
        </Container>
    );
}
export default MiddleBackground
import React from 'react'
import styled from 'styled-components'
import Image from '../../assests/images/monitor.png'

const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    position: absolute;
    right:0;
    height: 518px;
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
    right: 100px;
    top: 50px;
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
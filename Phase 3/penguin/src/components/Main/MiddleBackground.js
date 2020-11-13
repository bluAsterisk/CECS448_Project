import React from 'react'
import styled from 'styled-components'
import Image from '../../assests/images/monitor.png'
import SpeechBubble from '../../assests/images/speech-bubble 1.png'
import Users from '../../assests/images/users 1.png'
import Clock from '../../assests/images/clock 1.png'
import Writing from '../../assests/images/writing 1.png'

const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    position: absolute;
    width: 1440px;
    height: 518px;
    left: 0px;
    top: 88px;
`
const BottomContainer = styled.div`
    position: absolute;
    width: 1440px;
    height: 518px;
    left: 0px;
    top: 650px;
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
const Column = styled.div`
    float: left;
    width: 25%;
`
const PointImage = styled.img`
    display: block;
    margin: 10px auto 10px;
`
const PointTitle = styled.div`
    font-family: Pier Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    margin: 10px auto 10px;
`
const PointDescription = styled.div`
    font-family: Pier Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    margin: 10px 20px 10px 20px;
`
function MiddleBackground(){
    return(
        <div>
            <Container>
            <Slogan>Chat without ever having to miss a word</Slogan>
            <Monitor src={Image}/>
            </Container>
            <BottomContainer>
                <Column>
                    <PointImage src={Writing} />
                    <PointTitle>Real-Time Transcription</PointTitle>
                    <PointDescription>A chat log is kept during the meeting so that you don’t miss anything</PointDescription>
                </Column>
                <Column>
                    <PointImage src={Clock} />
                    <PointTitle>Schedule Meetings</PointTitle>
                    <PointDescription>Meetings can be hosted whenever you’re ready to meet</PointDescription>
                </Column>
                <Column>
                    <PointImage src={SpeechBubble} />
                    <PointTitle>Chat Messages</PointTitle>
                    <PointDescription>The chat log can log both spoken and written messages</PointDescription>
                </Column>
                <Column>
                    <PointImage src={Users} />
                    <PointTitle>Differentiate Speakers</PointTitle>
                    <PointDescription>The chat log keeps track of who is saying what</PointDescription>
                </Column>
            </BottomContainer>
        </div>
        
    );
}
export default MiddleBackground
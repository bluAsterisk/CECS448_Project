import React from 'react'
import styled from 'styled-components'
import Image from '../../assests/images/monitor.png'
import SpeechBubble from '../../assests/images/speech-bubble 1.png'
import Users from '../../assests/images/users 1.png'
import Clock from '../../assests/images/clock 1.png'
import Writing from '../../assests/images/writing 1.png'

const BottomContainer = styled.div`
    position: absolute;
    width: auto;
    height: 518px;
    padding-left: 0px;
    padding-top: 650px;
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
function BottomPoints(){
    return(
        
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
        
    );
}
export default BottomPoints
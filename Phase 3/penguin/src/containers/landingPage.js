import React from 'react'
import MiddleBackground from '../components/LandingPage/MiddleBar'
import Header from '../components/Header/Header'
import BottomPoints from '../components/LandingPage/BottomPoints'
import Buttons from '../components/LandingPage/Buttons'

function LandingPage(){
    return(
        <div>
            <Header />
            <MiddleBackground />
            <BottomPoints />
            <Buttons />
        </div>
    );
}

export default LandingPage
import React from 'react'
import MiddleBackground from '../LandingPage/MiddleBar'
import Header from '../Header/Header'
import BottomPoints from '../LandingPage/BottomPoints'
import Buttons from '../LandingPage/Buttons'

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
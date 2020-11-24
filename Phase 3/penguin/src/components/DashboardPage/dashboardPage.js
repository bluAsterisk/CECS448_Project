import React from 'react'
import Header from '../Header/Header'
import AccSettings from '../DashboardPage/AccSettings'
import WelcomeTxt from '../DashboardPage/WelcomeTxt'
import Buttons from '../DashboardPage/Buttons'

function DashboardPage(){
    return(
        <div>
            <Header />
            <AccSettings />
            <WelcomeTxt />
            { /*<Buttons />*/ }
        </div>
    );
}

export default DashboardPage
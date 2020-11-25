import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import landingPage from '../src/components/LandingPage/landingPage';
import loginPage from '../src/components/LoginPage/loginPage'
import registrationPage from '../src/components/RegistrationPage/registrationPage'
import dashboardPage from '../src/components/DashboardPage/dashboardPage'
import chatPage from './components/ChatPage/chatPage';

export const HomeRoute = "/";
export const LoginPage = "/login/";
export const RegistrationPage = "/registration/"
export const DashboardPage = "/dashboard/"
export const ChatPage = "/chat/"

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Route path={HomeRoute} exact component={landingPage} />
                <Route path={LoginPage} component={loginPage} />
                <Route path={RegistrationPage} component={registrationPage}/>
                <Route path={DashboardPage} component={dashboardPage}/>
                <Route path={ChatPage} component={chatPage}></Route>
            </div>
        );
    }
}
export default withRouter(Routing);
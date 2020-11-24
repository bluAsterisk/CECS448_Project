import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import landingPage from '../src/components/LandingPage/landingPage';
import loginPage from '../src/components/LoginPage/loginPage'
import registrationPage from '../src/components/RegistrationPage/registrationPage'

export const HomeRoute = "/";
export const LoginPage = "/login/";
export const RegistrationPage = "/registration/"

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Route path={HomeRoute} exact component={landingPage} />
                <Route path={LoginPage} component={loginPage} />
                <Route path={RegistrationPage} component={registrationPage}/>
            </div>
        );
    }
}
export default withRouter(Routing);
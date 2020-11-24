import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import landingPage from '../src/components/LandingPage/landingPage';
import loginPage from '../src/components/LoginPage/loginPage'
import registrationPage from '../src/components/RegistrationPage/registrationPage'
import dashboardPage from '../src/components/DashboardPage/dashboardPage'

export const HomeRoute = "/";
export const LoginPage = "/login/";
export const RegistrationPage = "/registration/"
export const DashboardPage = "/dashboard/"

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Route path={HomeRoute} exact component={landingPage} />
                <Route path={LoginPage} component={loginPage} />
                <Route path={RegistrationPage} component={registrationPage}/>
                <Route path={DashboardPage} component={dashboardPage}/>

            </div>
        );
    }
}
export default withRouter(Routing);
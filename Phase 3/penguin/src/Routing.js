import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import landingPage from './containers/landingPage';
import loginPage from './containers/loginPage'
export const HomeRoute = "/";
export const login = "/login/";
class Routing extends React.Component {
    render() {
        return (
            <div>
                <Route path={HomeRoute} exact component={landingPage} />
                <Route path={login} component={loginPage} />
            </div>
        );
    }
}
export default withRouter(Routing);
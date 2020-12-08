import React, {Redirect} from 'react'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'

import AuthUserContext from './context'
import {withFirebase} from '../Firebase'
import Routing, {HomeRoute} from '../../Routing'

const withAuthorization = condition => Component => {
    class withAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if(!condition(authUser)) {
                        this.props.history.push({HomeRoute})
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }


        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                    condition(authUser) ? <Component {...this.props} /> : null
                    }

                </AuthUserContext.Consumer>
            );
        }
    }

    return compose(
        withRouter,
        withFirebase,
    )(withAuthorization);

};

export default withAuthorization;
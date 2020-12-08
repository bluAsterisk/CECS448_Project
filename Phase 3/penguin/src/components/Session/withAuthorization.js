import React from 'react'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'

import {withFirebase} from '../Firebase'
import Routing, {HomeRoute} from '../../Routing'

const withAuthorization = condition => Component => {
    class withAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if(!condition(authUser)) {
                        <Redirect to ={HomeRoute}/>
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }


        render() {
            return (
                <Component {...this.props} />
            );
        }
    }

    return compose(
        withRouter,
        withFirebase,
    )(withAuthorization);

};

export default withAuthorization;
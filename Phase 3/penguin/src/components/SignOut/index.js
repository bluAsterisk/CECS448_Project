import React from 'react'
import ButtonBase from '@material-ui/core/Button'
import {withFirebase} from '../Firebase';

const SignOutButton = ({firebase}) => (
    <ButtonBase variant ="contained" color = "secondary" type="button" onClick={firebase.doSignOut}>
        Log Out
    </ButtonBase>
);

export default withFirebase(SignOutButton);
import react from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {LoginPage} from '../../Routing'
import Linker from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

export default function AlreadyHaveAccount(){
    return (
        <div>
            <Grid container spacing = {1} direction = "row" alignItems="center" justify="center">
                <Grid item>
                    <h3>Already have an account?</h3>
                </Grid>
                <Grid item>
                    <Linker component={Link} to={LoginPage}
                    variant="h6"
                    >Sign In</Linker>
                </Grid>
            </Grid>
        </div>
    );
}
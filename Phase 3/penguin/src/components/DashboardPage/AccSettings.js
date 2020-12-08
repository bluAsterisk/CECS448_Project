import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'



const SettingsLink = styled.div`
    font-family: Pier Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    text-align: center;
`

function AccSettings(){
    return(
        <SettingsLink>Account Settings</SettingsLink>
    );
}
export default AccSettings
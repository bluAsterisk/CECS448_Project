import React from 'react'
import styled from 'styled-components'

const SettingsLink = styled.div`
    position: absolute;
    width: 155px;
    height: 24px;
    right: 50px;
    top: 20px;

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
import React from 'react'
import styled from 'styled-components'
import Image from  '../../assests/images/SideBarRegistration.png'


const Sidebar = styled.img`
position: fixed;
left: 74%;
top 0px;
height:1080px;
`

function SideBar(){
    return (
        <Sidebar src = {Image}/>
    );
}

export default SideBar
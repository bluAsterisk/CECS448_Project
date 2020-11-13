import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Container = styled.div`
    background-color: ${({ theme }) => theme.primary};
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 88px;
    display: flex;
    flex-direction: column;
    align-items: start;


`


function Header(){
    return(
        <Container>
            <Logo />
        </Container>
        
    );
}

export default Header

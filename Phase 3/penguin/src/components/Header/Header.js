import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Container = styled.div`
    background-color: ${({ theme }) => theme.primary};
    height: 88px;
    width: auto;
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

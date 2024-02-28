import React from 'react'

import { AppBar, Toolbar, styled } from '@mui/material';
import logo from '../images/logo-white.png';

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;


function Header() {


  return (
    <Container position='static'>
        <Toolbar>
        <img src={logo} alt="logo" style={{ width: 40 }} />
        </Toolbar>
    </Container>
  )
}

export default Header

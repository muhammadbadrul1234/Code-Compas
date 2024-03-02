import React from 'react'



//components
import Code from './Code';
import Result from './Result';
import Header from './Header';
import HomeNavbar from '../../LandingPage/Components/Navbar';
import UserNavbar from '../../Navbar/Navbar';

const CraftPen = () => {
    return (
      <>
        <UserNavbar />
        
        <Code />
        Result:
        <Result />
      </>
    );
}

export default CraftPen;
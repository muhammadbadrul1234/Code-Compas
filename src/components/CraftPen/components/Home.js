import React from 'react'



//components
import Code from './Code';
import Result from './Result';
import Header from './Header';
import HomeNavbar from '../../LandingPage/Components/Navbar';

const CraftPen = () => {
    return (
        <>
            <HomeNavbar/>
            
            <Code />
            Result:
            <Result />
        </>
    )
}

export default CraftPen;
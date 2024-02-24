import React from 'react';
import Sidenav from '../ccomponents/Sidenav';
import CNavbar from '../ccomponents/CNavbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from './lists/List';



export default function Courses() {
    return (
        <>
        <CNavbar />
            <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                            <List />
                        </Box>
            </Box>
        </>
    );
}
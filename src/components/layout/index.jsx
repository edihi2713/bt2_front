import React from 'react';
import Navbar from '../navbar';
import Box from '@mui/material/Box';
import RoutesCollection from '../../routes/mainRouter'
import  '../../styles/app.css';


function Layout() {
  return (
      <Box>
        <div className="layout-container">
            <Navbar/>
            {RoutesCollection}
        </div>
      </Box>       
  );
}

export default Layout;
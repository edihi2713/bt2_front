
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link } from "react-router-dom";
import './navbar.css';


function Navbar(){
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color='secondary' >
            <Toolbar className='main-toolbar-items'>
              <Typography variant="h6" component="div">
                <Link to="/" className='text-link'><Button color="inherit">Bienvenido a B2C</Button> </Link>
              </Typography>
              <Typography variant="h6" component="div">
                <Link to="/login" className='text-link'><Button color="inherit">Ingresar</Button> </Link> 
                <Link to="/register" className='text-link'><Button color="inherit">Registrarse</Button> </Link> 
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;

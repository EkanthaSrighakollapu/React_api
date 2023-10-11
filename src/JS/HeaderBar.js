import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DevicesFoldSharpIcon from '@mui/icons-material/DevicesFoldSharp';
import { Link,Routes,Route } from 'react-router-dom';
import 'Content' from './Content.js';
import './HeaderBar.css';
export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <DevicesFoldSharpIcon></DevicesFoldSharpIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <nav>
            <ul>
               <li><Link to="/content">Login</Link></li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
      <Routes>
           <Route path='/content' element={<Content/>} />
      </Routes>
    </Box>
  );
}

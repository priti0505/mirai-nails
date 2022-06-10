import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import BooKNowButton from './BookNowBtn';
import Link from '@mui/material/Link';


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static">
        <Toolbar>
        <div>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
            className="mirai-MuiSvgIcon-root"
          >
               <MenuIcon />
              </IconButton>
           
               <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} >
                  <Link href="/" underline="hover">Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose} >
                  <Link href="/services" underline="hover">Pricelist</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>Contact Us</MenuItem>
              </Menu>
          
        </div>
         
          <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" className="mirai-header-text" >Mirai Nails</Link>
          </Typography>
          
          <span justifyContent="right"><BooKNowButton /></span>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

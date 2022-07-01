import * as React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

import { Outlet, NavLink } from 'react-router-dom';


const drawerWidth = 240;
// const navItems = ['Home', 'Login', 'Register'];

function UserMenu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        My PhoneBook
      </Typography>
      <Divider />
      <List>
<NavLink to='/'>Home</NavLink>
<NavLink to = '/login'>Login</NavLink>
<NavLink to = '/register'>Register</NavLink>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
   
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            My PhoneBook
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <List>
            <NavLink to='/' style={({ isActive }) => {
          return {
            // display: 'block',
            margin: '0 20px 0',
            padding: '15px 0',
            color: isActive ? '#f59e42' : 'white',
          };
        }}>Home</NavLink>
<NavLink to = '/login' style={({ isActive }) => {
          return {
            // display: 'block',
            margin: '0 20px 0',
            padding: '15px 0',
            color: isActive ? '#f59e42' : 'white',
          };
        }}>Login</NavLink>
<NavLink to = '/register' style={({ isActive }) => {
          return {
            // display: 'block',
            margin: '0 20px 0',
            padding: '15px 0',
            color: isActive ? '#f59e42' : 'white',
          };
        }}>Register</NavLink>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

      </Box>
<Outlet/>
    </Box>
    
   
  );
}

// DrawerAppBar.propTypes = {

//   window: PropTypes.func,
// };

export default UserMenu;

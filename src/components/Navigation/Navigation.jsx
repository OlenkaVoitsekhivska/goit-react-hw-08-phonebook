import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

const drawerWidth = 240;

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const logged = useSelector(isLoggedIn);

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
        {logged ? (
          <ListItem>
            <UserMenu />
          </ListItem>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
              {logged ? (
                <ListItem>
                  <UserMenu />
                </ListItem>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    style={({ isActive }) => {
                      return {
                        margin: '0 20px 0',
                        padding: '15px 0',
                        color: isActive ? '#f59e42' : 'white',
                      };
                    }}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    style={({ isActive }) => {
                      return {
                        margin: '0 20px 0',
                        padding: '15px 0',
                        color: isActive ? '#f59e42' : 'white',
                      };
                    }}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/contacts"
                    style={({ isActive }) => {
                      return {
                        margin: '0 20px 0',
                        padding: '15px 0',
                        color: isActive ? '#f59e42' : 'white',
                      };
                    }}
                  >
                    Contacts
                  </NavLink>
                </>
              )}
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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;

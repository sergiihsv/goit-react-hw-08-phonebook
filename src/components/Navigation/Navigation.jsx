import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { UserMenu } from './UserMenu';

const Navigation = ({
  isDark = false,
  changeTheme,
  loggedIn,
  handleLogout,
}) => {
  const userName = useSelector(state => state.authification.user.name);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link
              component={RouterLink}
              to={loggedIn ? '/contacts' : '/'}
              color="secondary"
              variant="h3"
              underline="none"
              sx={{ flexGrow: 1 }}
            >
              My contacts
            </Link>

            {loggedIn ? (
              <UserMenu userName={userName} handleLogout={handleLogout} />
            ) : (
              <>
                <Button component={RouterLink} to="/register" color="inherit">
                  Registration
                </Button>
                <Button component={RouterLink} to="/login" color="inherit">
                  Login
                </Button>
              </>
            )}

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ m: 2 }}
              onClick={() => {
                changeTheme();
              }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

UserMenu.propTypes = {
  userName: PropTypes.string,
};

export default Navigation;
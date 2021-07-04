import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import ToggleMenu from './ToggleMenu';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';



const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    
    <AppBar className={classes.appBar} position="sticky" /*color="primary"*/>
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h3" /*color="secondary" align="center"*/>Travel India</Typography>
        
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.avatar} title={`Welcome \n ${user?.result.name}!`} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            {/* <Typography className={classes.userName} variant="h6" color='textPrimary'>{user?.result.name}</Typography>
            <Button variant="contained" className={classes.home} color="secondary" component={Link} to="/home" >Home</Button>
            <Button variant="contained" className={classes.home} color="secondary" component={Link} to="/myposts" >My Posts</Button> */}
            <ToggleMenu />
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          
          <Button component={Link} to="/auth" variant="contained" className={classes.signin} color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
   
  );
};

export default Navbar;

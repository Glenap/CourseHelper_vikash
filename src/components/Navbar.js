import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Course Helper
      </Typography>
      <Button color="inherit" href="/login">
        Login
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;

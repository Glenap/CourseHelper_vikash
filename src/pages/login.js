import React from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';

const LoginPage = () => (
  <Container
    style={{
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Paper
      elevation={3}
      style={{
        padding: '2rem',
        maxWidth: 400,
        width: '100%',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Login
        </Button>
      </form>
    </Paper>
  </Container>
);

export default LoginPage;

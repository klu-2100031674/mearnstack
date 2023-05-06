import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import back1 from './images/back1.jpg';
export default function Reset() {
  const [datap , setDatap] = useState("");
  const [email, setEmail] = useState("");
  const styles = {
    paperContainer: {
      height: 713,
        backgroundImage: `url(${back1})`
    }
};
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Reset");
        setDatap(data.status);
      });
  }
  const theme = createTheme();
  return (
  <Paper style={styles.paperContainer}>
    h
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs" sx={{borderRadius:'15px',backgroundColor: 'rgba(255, 255, 255, .15)',  
backdropFilter: 'blur(5px)',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {datap ? (
        <Alert severity="error">{datap}</Alert>
      ) : (
        null
        
      )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Link
          </Button>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  </Paper>
  );
}

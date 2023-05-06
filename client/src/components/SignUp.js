import React, {useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import isEmail from 'validator/lib/isEmail';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import back1 from './images/back1.jpg';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp(props) {
  const styles = {
    paperContainer: {
      height: 713,
        backgroundImage: `url(${back1})`
    }
};
  const[datastatus,setDatastatus]=useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [dirty, setDirty] = useState(false);
  
  const handleChange = event => {
      const val = event.target.value;                
      
      if(isEmail(val)) {
          setIsValid(true);              
      } else {
          setIsValid(false);              
      }
      
      setValue(val);                
      props.handleChange(val, isValid);
  }

  const handleSubmit = (e) => {
    if (userType === "Admin" && secretKey !== "ram") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setDatastatus(data.error);
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
            window.location.href = "/sign-in";
          }
        });
    }
  };

  return (
    <Paper style={styles.paperContainer}>
                S
            
    <ThemeProvider theme={theme}>
       
      <Container component="main" maxWidth="xs" sx={{background:'white',borderRadius:'15px', backgroundColor: 'rgba(255, 255, 255, .15)',  
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main',background:'#CBB26A'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {datastatus ? (
        <Alert severity="error">{datastatus}</Alert>
      ) : (
        null
        
      )}
          <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType === "Admin" ? (
             <TextField
             required
             autoComplete="given-name"
             name="firstName"
             fullWidth
             id="firstName"
             label="SecretKey"
             onChange={(e) => setSecretKey(e.target.value)}
             autoFocus
           />
          ) : null}
          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
   
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                required
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => setFname(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={(e) => setLname(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={dirty && isValid === false}                                        
                  onBlur={() => setDirty(true)}
                  id="email"
                  label="Email Address"
                  name="email"
                  value={value}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{marginTop: 1}}
                  onChange={(e) => {setEmail(e.target.value);handleChange(e)}}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            {isValid?(
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2,backgroundColor:'#CBB26A',color:'black',':hover': { bgcolor: 'pink', color:'white'}}}
            >
              Sign Up
            </Button>):( <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled
            >
              Sign Up
            </Button>)}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      
    </ThemeProvider>
    </Paper>
  );
}
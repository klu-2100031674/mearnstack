import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Elogo1 from './images/Elogo1.png';
import React, { useEffect, useState } from "react";
const pages = ['About Us','Artists','Events','News','Contact Us'];
const settings = ['Profile'];

function Nav(props) {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const [anchorElNav, setAnchorElNav] = React.useState(null);   
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [log ,setLog]=React.useState(false);
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        if (data.data.userType === "Admin") {
          setAdmin(true);
        }

        setUserData(data.data);
      });
  }, []);

const signin=(event)=>{
  window.location.href='/sign-in'
}
const signup=(event)=>{
  window.location.href='/signup'
}
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{maxWidth:'100%',background:'black'}}>
      <Container maxWidth="">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <img src={Elogo1} href="/login" style={{cursor:'pointer',width:'200px'}}></img>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" variant="h6"
            noWrap
            component="a"
            href={page.toLowerCase().substring(0,3)}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 800,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          ><img src={Elogo1} href="/login" style={{cursor:'pointer',width:'200px'}}></img>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography textAlign="center" variant="h6"
            noWrap
            component="a"
            href={page.toLowerCase().substring(0,3)}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Georgia',
              fontWeight: 300,
              letterSpacing: '.3rem',
              color: 'inherit',
              fontSize:'12px',
              textDecoration: 'none',
            }}>{page}</Typography>
              </Button>
            ))}
          </Box>
          {isLoggedIn==='true'?( 
          <Box sx={{ flexGrow: 0,}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {userData ?(
                  <Avatar alt="Remy Sharp"
                  src={userData.image} />
              ):(<Avatar alt="Remy Sharp" src="" />)
                }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Button>
                  <Typography 
                  textAlign="center" 
                  component="a"
                  href={setting.toLowerCase().substring(0,3)}>{setting}</Typography>
                  
                  </Button>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>):(
            <div>
          <button onClick={signin} style={{background:'transparent',color:'white',fontSize:'20px',cursor:'pointer',border:'transparent'}}>Sign In</button>
          <button onClick={signup} style={{background:'transparent',color:'white',fontSize:'20px',cursor:'pointer',border:'transparent'}}>Sign Up</button>

          </div>
          )}
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
import { useState } from 'react';
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
import { headerLayoutStyles } from './HeaderLayout.styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/auth';
import HomeIcon from '@mui/icons-material/Home';
import { Divider } from '@mui/material';
import { globalStyles } from '../../../styles/global.styles';

export const Header = () => {
  const classes = headerLayoutStyles();
  const globalClases = globalStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>          
          <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />        
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >          
            MyHome
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
              <MenuItem component={Link} to='/' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              {currentUser && (            
              <MenuItem component={Link} to='tareas' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Tareas</Typography>
              </MenuItem>)}
              {currentUser && (            
              <MenuItem component={Link} to='lista' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Lista de la compra</Typography>                
              </MenuItem>)}
              {currentUser && (
              <MenuItem component={Link} to='productos' onClick={handleCloseNavMenu}>              
                <Typography>Productos</Typography>
              </MenuItem>
              )}
              
              {currentUser && (            
              <MenuItem component={Link} to='contactos' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contactos</Typography>
              </MenuItem>)}
              {currentUser && (            
              <MenuItem component={Link} to='calendario' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Calendario</Typography>
              </MenuItem>)}              
            </Menu>
          </Box>
          <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyHome
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>                        
            <Button component={Link} to='/' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Inicio
            </Button>
            {currentUser && (               
            <Button component={Link} to='tareas' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Tareas
            </Button>)}
            {currentUser && (               
            <Button component={Link} to='lista' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Lista de la compra
            </Button>)}            
            {currentUser && (               
            <Button component={Link} to='contactos' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Contactos
            </Button>)}
            {currentUser && (               
            <Button component={Link} to='calendario' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Calendario
            </Button>)}                                                                  
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {currentUser ? <Avatar alt={currentUser?.username.toUpperCase()} src="/static/images/avatar/2.jpg" /> : <Avatar alt="" src="/static/images/avatar/2.jpg" />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
                {currentUser && 
                <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Perfil</Typography>
                </MenuItem> }
                              
                <MenuItem component={Link} to="/acerca" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Acerca de</Typography>
                </MenuItem>

                <MenuItem component={Link} to="/faqs" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Faqs</Typography>
                </MenuItem>

                <Divider/>

                {!currentUser ? (
                <MenuItem component={Link} to="/login" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>):
                (                                               
                  <MenuItem onClick={() => {
                    handleCloseUserMenu();
                    dispatch(logout())                    
                  }}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>                
                )}

              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

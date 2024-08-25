import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import About from './Menus/About'
import Contact from './Menus/Contact'
import Home from './Menus/Home'
import Signup from './Menus/Signup'
import { useAuth } from '~/context/AuthContext'; // Adjust the path to where your AuthProvider is located
import { Link, useNavigate } from 'react-router-dom'

export default function AppBar() {
  const { user, logout } = useAuth(); // Get the current user and logout function from context
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <Container disableGutters maxWidth='xl'>
      <Box
        px={2}
        sx={{
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexGrow: 4,
          borderBottom: '1px solid #eee',
          py: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Typography
            variant="span"
            sx={{ fontSize: '24px', fontWeight: 'bold', color: 'primary.main' }}
          >
            Exclusive
          </Typography>
        </Box>

        <Box display='flex' gap={10}>
          <Home />
          <Contact />
          <About />
          <Signup />
        </Box>

        <Box display='flex' alignItems='center' gap={5}>
          <TextField
            id="search"
            type="text"
            size='small'
            placeholder='What are you looking for?'
            fullWidth
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              sx: {
                p: 0,
                mr: '15px',
              },
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'black' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              p: '7px',
              bgcolor: '#F5F5F5',
              borderRadius: '8px',
              fontSize: '14px',
              '& label': { color: 'black' },
              '& input': { color: 'black' },
              '& label.Mui-focused': { color: 'black' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
            }}
          />

          {/* Conditional rendering based on user authentication */}
          {user ? (
            <Box display='flex' alignItems='center' gap={5}>
              <FavoriteBorderIcon fontSize='large' />
              <ShoppingCartOutlinedIcon fontSize='large' />

              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <AccountCircleIcon fontSize='large' sx={{ color: '#DB4444' }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem component={Link} to="/profiles">
                  <AccountCircleOutlinedIcon />
                  <ListItemText sx={{ marginLeft: '10px' }}>Manage My Account</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem component={Link} to="/orders">
                  <ShoppingBagOutlinedIcon />
                  <ListItemText sx={{ marginLeft: '10px' }}>My Order</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem component={Link} to="/cancellations">
                  <CancelOutlinedIcon />
                  <ListItemText sx={{ marginLeft: '10px' }}>My Cancellations</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem component={Link} to="/reviews">
                  <StarBorderOutlinedIcon />
                  <ListItemText sx={{ marginLeft: '10px' }}>My Reviews</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <LogoutOutlinedIcon />
                  <ListItemText sx={{ marginLeft: '10px' }}>Logout</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button variant="contained" color="primary" onClick={() => navigate('/login')}>
              Login
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}

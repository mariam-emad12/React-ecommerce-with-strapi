import { Container, IconButton, Stack, Typography, Badge, MenuItem, Menu, List, ListItemButton, ListItemText } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import '../../index.css'


// Search bar styles
const Search = styled('div')(({ theme }) => ({
  position: 'relative',

  borderRadius: 9,
  backgroundColor: "#F3F5F9",
  color: "#A6ABB4",
  display: 'flex',
  alignItems: 'center',
  // padding: theme.spacing(0.3, 1), // Smaller padding
  height: '50px', // Adjust height
  [theme.breakpoints.up('md')]: {
    width: '80ch', // Reduce width
  },
  border: "1px solid transparent", // Default no border
  "&:hover": { border: "1px solid rgb(79, 79, 80)" }, // Hover effect
  "&:focus-within": { border: "1px solid rgb(0, 0, 0)" }, // When input is focused
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '100%',
  fontSize: '14px', // Smaller font size
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.5, 1, 0.5, 0), // Smaller padding
    paddingLeft: `calc(1em + ${theme.spacing(3)})`, // Reduce left padding
    height: '20px', // Adjust height
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
}));


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const options = ['All Categories', 'Car', 'Clothes', 'Electronics', 'Laptop', 'Desktop', 'Camera', 'Toys'];

export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {/* Logo */}
      <Stack alignItems="center">
        <ShoppingCartOutlinedIcon sx={{ color: theme.palette.mode === "dark" ? "White" : "#2B3445" }} />
        <Typography variant="body2" sx={{ color: theme.palette.mode === "dark" ? "White" : "#2B3445" }}>E-commerce</Typography>
      </Stack>

      {/* Search Bar */}
      <Stack direction="row" alignItems="center">
        <Search sx={theme.palette.mode === "dark" ? { border: "1px solid #1F2937" } : { border:"1px solid #CCCED1"}   }>
          <SearchIconWrapper  >
            <SearchIcon  />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Searching for..." inputProps={{ 'aria-label': 'search' }} />
          {/* Dropdown Menu */}
          <List component="nav" aria-label="Categories">
            <ListItemButton
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
              sx={{ '&:hover': { backgroundColor: theme.palette.myColor.main }, borderLeft: "1px solid rgb(175, 173, 173)", height: "49px", backgroundColor: theme.palette.myColor.main, borderRadius: "0px 8px 8px 0px", width: "150px" }}
            >
              <ListItemText secondary={options[selectedIndex]} sx={{ textAlign: "center", cursor: "pointer" }} />
              <ExpandMoreIcon sx={{ color: "#999A9D" }} />
            </ListItemButton>
          </List>
        </Search>

        {/* Dropdown Menu */}
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}

        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={() => handleMenuItemClick(index)}
              sx={{ "&:hover": { backgroundColor: "#F3F5F9" }, color: "#616264", padding: "10px 60px 10px 10px", fontSize: "14px" }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Stack>

      {/* Profile & Cart */}
      <Stack direction="row" alignItems="center">
        <IconButton >
          <PersonOutlineOutlinedIcon sx={{ color: theme.palette.mode === "dark" ? "White" : "#2B3445" }} />
        </IconButton>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon sx={{ color: theme.palette.mode === "dark" ? "White" : "#2B3445" }} />
          </StyledBadge >
        </IconButton>
      </Stack>
    </Container>
  );
}

import { Box, Container,  Drawer, IconButton,  ListItemText, MenuList, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useState } from "react";
import PedalBikeRoundedIcon from '@mui/icons-material/PedalBikeRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './header3.css'
import Links from "./Links";
export default function Header3() {
  const menuBtn = useMediaQuery('(max-width:1200px)');
  
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  // Drawer

  const [state, setState] = useState({ top: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ top: open });
  };





  return (
    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" , mt:5  }}>


      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ fontFamily: "Public Sans", color: theme.palette.text.primary, textTransform: "capitalize", backgroundColor: theme.palette.myColor.main }}
        >
          <WidgetsRoundedIcon sx={{ mx: "4px", color: "#1F2937" }} />   <Typography sx={{ m: "0px 70px 0px 2px " }}>Categories</Typography> <ArrowForwardIosRoundedIcon sx={{ fontSize: "12px" }} />
        </Button>
        <Menu
          sx={{ "MuiPaper-root": { mt: "5px", backgroundColor: theme.palette.myColor.main } }}

          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem className="menu-item-category" onClick={handleClose} ><PedalBikeRoundedIcon sx={{ mr: "9px" }} /> Bikes</MenuItem>
          <MenuItem className="menu-item-category" onClick={handleClose}><LaptopChromebookRoundedIcon sx={{ mr: "9px" }} /> Electronics</MenuItem>
          <MenuItem className="menu-item-category" onClick={handleClose}><MenuBookRoundedIcon sx={{ mr: "9px" }} /> Books</MenuItem>
          <MenuItem className="menu-item-category" onClick={handleClose}><SportsEsportsRoundedIcon sx={{ mr: "9px" }} /> Games</MenuItem>
        </Menu>
      </Box>
    
      
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer(false)} sx={{ ".MuiBox-root": { height: "100vh" } }}>

        <Box sx={{ width: "444px", mx: "auto", mt: 6, position: "relative" }}>
          <div style={{ position: "absolute", top: "100px" }}>
          {[{ mainLink: "Home", subLink: ["Link 1", "Link 2", "Link 3"] }, { mainLink: "Mega menu", subLink: ["Link 1", "Link 2", "Link 3"] }, { mainLink: "Full screen menu", subLink: ["Link 1", "Link 2", "Link 3"] }, { mainLink: "Pages", subLink: ["Link 1", "Link 2", "Link 3"] }, { mainLink: "User account", subLink: ["Link 1", "Link 2", "Link 3"] }, { mainLink: "Vendor account", subLink: ["Link 1", "Link 2", "Link 3"] }].map((item)=>{
            return(
              <Accordion key={item} elevation={0} sx={{ backgroundColor: "transparent" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">{item.mainLink}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paper elevation={0} sx={{ width: 420, maxWidth: '100%', backgroundColor: "transparent" }}>
                    <MenuList sx={{ margin: "0", padding: "0" }}>
                      <MenuItem sx={{ margin: "0" }}>

                        <ListItemText>{item.subLink[0]}</ListItemText>

                      </MenuItem>
                      <MenuItem sx={{ margin: "0" }}>

                        <ListItemText>{item.subLink[1]}</ListItemText>

                      </MenuItem>
                      <MenuItem sx={{ margin: "0" }}>

                        <ListItemText>{item.subLink[2]}</ListItemText>
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </AccordionDetails>
              </Accordion>
            )
          })}



          </div>

          <IconButton onClick={toggleDrawer(false)} sx={{":hover":{color:"red" , rotate:"180deg" , transition:"0.3s"} , position: "absolute", top: "0", right: "0" }}><CloseIcon /></IconButton>
        </Box>
      </Drawer>
     
      { useMediaQuery('(min-width:1200px)') && <Stack  alignItems={"center"} gap={4} direction={"row"}> <Links title="Home" />
      <Links title="Mega Menu"/>
      <Links title="Full Screen Menu"/>
      <Links title="Pages"/>
      <Links title="User Account"/>
      <Links title="Vendor Account"/> </Stack> }
      {menuBtn && (<IconButton onClick={toggleDrawer(true)} ><MenuRoundedIcon /></IconButton>)}
    </Container>
  )
}

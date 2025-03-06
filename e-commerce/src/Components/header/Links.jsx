import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Links({title}) {
  return (
   <Box sx={{display:"flex" , justifyContent:"space-around"}}>
   
    <Box className="" sx={{ ":hover .paper": { display: "block" , cursor:"pointer" }, display: "flex", alignItems: "center", position: "relative" }}>
      <Typography sx={{":hover":{cursor:"pointer"}}}>{title}</Typography>
      <ExpandMoreIcon />


      <Box className="paper" sx={{ zIndex:"1000", position: "absolute", top: "100% ", right: "0", minWidth: "160px", left: "50%", transform: "translateX(-50%)", 
        display: "none" 

        }}>
        <Paper sx={{mt:2}}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton  >
                  <ListItemText >
                    <Typography sx={{fontSize:"15px"}}>Dashboard</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem sx={{":hover .paper1": { display: "block" }, position:"relative"}} disablePadding>
                <ListItemButton  >
                  <ListItemText  sx={{}}>
                    <Typography  sx={{fontSize:"15px",display:"flex", justifyContent:"space-between" , alignItems:"center"}}>Products  <ArrowForwardIosIcon sx={{fontSize:"12px"}} /></Typography>
                   
                  </ListItemText>
                </ListItemButton>

<Box  sx={{
  display:"none",
position:"absolute",
top:"30%",
left:"100%" , 
minWidth:"160px",

}} 
className = "paper1">
                <Paper >
          <nav aria-label="secondary mailbox folders">
            <List>
            
           
              <ListItem disablePadding>
                <ListItemButton  >
                  <ListItemText >
                    <Typography sx={{fontSize:"15px"}}>Add product</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton  >
                  <ListItemText >
                    <Typography sx={{fontSize:"15px"}}>Edit product</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
             
            </List>
          </nav>
        </Paper>
        </Box>
              </ListItem>


              <ListItem disablePadding>

                <ListItemButton  >
                  <ListItemText >
                    <Typography sx={{fontSize:"15px"}}>Orders</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>



              <ListItem disablePadding>
                <ListItemButton  >
                  <ListItemText >
                    <Typography sx={{fontSize:"15px"}}>Profile</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
             
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
   </Box>
  )
}

import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
export default function ScrollToTop() {
  return (
  <Zoom in={useScrollTrigger()}>
      <Fab 
      onClick={()=>{
        window.scrollTo(0,0)
      }}
      sx={{position:"fixed" , bottom:"40px" , right:"40px"}} color="" size="small" aria-label="add">
   <ArrowUpwardRoundedIcon fontSize="small"/>
  </Fab>
  </Zoom>
  )
}


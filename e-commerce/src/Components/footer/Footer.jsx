import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{
        bgcolor:"#2B3445",
        py:1.3,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
       
    }}>
      <Typography sx={{
        justifyContent:"center",
        display:"flex",
        alignItems:"center",
        color:"HighlightText",
        fontSize:"18px"
      }} variant="h6">
        Designed and developed by Mariam Emad &copy; 2025.
      </Typography>
    </Box>
  )
}

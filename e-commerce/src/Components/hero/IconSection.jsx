import { Box, Container, Divider, Icon, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AlarmIcon from '@mui/icons-material/Alarm';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
export default function IconSection() {
  const dividerMedia = useMediaQuery('(min-width:534px)');
  return (
    <Container>
        <Stack  divider={ dividerMedia ? <Divider orientation="vertical" flexItem /> : null} direction={"row"} justifyContent={"center"} flexWrap={"wrap"} marginTop={3} >
            <MyBox icon={<ElectricBoltIcon fontSize="large"/>} text="Fast Delivery" desc="Start from $10"/>
            <MyBox icon={<WorkspacePremiumIcon fontSize="large"/>} text="Money Guarantee" desc="7 Days Back"/>
            <MyBox icon={<AlarmIcon fontSize="large"/>} text="365 Days" desc="For free return"/>
            <MyBox icon={<CreditScoreIcon fontSize="large"/>} text="Paymnet" desc="Secure system"/>
        </Stack>
    </Container>
  )
}


 function MyBox(props) {
  const dividerMedia = useMediaQuery('(min-width:534px)');
    const theme = useTheme();
  return (
    <Box  sx={{width:"250px" , display:"flex" , flexGrow:1 , alignItems:"center" , gap:1, justifyContent: dividerMedia ? "center" : "left" , backgroundColor: theme.palette.mode === "dark" ? "black" : "White",  paddingY:1 }}>
   {props.icon}
     <Box>
        <Typography variant="body1" sx={{fontWeight:"400" , color:theme.palette.text.primary}}> {props.text}</Typography>
        <Typography  variant="body1" sx={{color:theme.palette.text.secondary}}>{props.desc}</Typography>
     </Box>
    </Box>
  )
}


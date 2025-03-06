import { Box, Container, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';


export default function Hero() {
  const myMedia = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const mySlider = [
    {
      text:"MEN" , myLink:"../../../Assets/banner-15.jpg"
    } ,
    {
      text:"WOMEN" , myLink:"../../../Assets/banner-25.jpg"
    }
  ]

  return (
 
    <Container  sx={{mt:2.5 , display:"flex", justifyContent:"space-between", gap:2 ,alignItems:"center" , paddingTop:"30px" }} >
        
         
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
       {mySlider.map((item)=>{
        return (
          <SwiperSlide  key={item.myLink} sx={{position:"relative"}}>
          <img src={item.myLink} alt="banner"  />

          <Box 
        sx={ myMedia && { position:"absolute" , left:"10%" , textAlign:"left"}}
          >
            <Typography variant='h6'
            //  sx={{color:"#222" }}
            sx={{ [theme.breakpoints.up(632)]: {
              color:"#222"
            },
            [theme.breakpoints.down(632)]: {
              color:"#222", fontSize:"18px"
            }}}
             >LIFESTYLE COLLECTION
             </Typography>
            <Typography variant='h4' 
            // sx={{color:"#222" , fontWeight:"400", my:1 }} 
            sx={{ [theme.breakpoints.up(969)]: {
              color:"#222" ,  my:1 
            },
            [theme.breakpoints.down(969)]: {
              color:"#222", fontSize:"24px" , my:1
            }}}
            >{item.text}
            </Typography>
            <Stack sx={{justifyContent:"left"}} direction={"row"} alignItems={"center"}>
              <Typography variant='h5' 
              // sx={{color:"#333", mr:1 }}
              sx={{ [theme.breakpoints.up(969)]: {
                color:"#333", mr:1 
              },
              [theme.breakpoints.down(969)]: {
                color:"#333", mr:1 , fontSize:"20px"
              }}}
              >SALE UP TO </Typography>
              <Typography variant='h5' sx={{  [theme.breakpoints.down(969)]: {
                color:"#D23F57", mr:1 , fontSize:"20px"
              }, [theme.breakpoints.up(969)]:{
                color:"#D23F57"
              }}}> 30% OFF</Typography>
            </Stack>
            <Typography variant='body1' 
            // sx={{color:"#000" , fontWeight:"300" , my:1}}
            sx={{  [theme.breakpoints.down(655)]: {
              color:"#000",fontWeight:"300", fontSize:"15px"  , my:1
            }, [theme.breakpoints.up(655)]:{
              color:"#000" , fontWeight:"300" , my:1
            }}}
            >Get Free Shipping on orders over $99.00</Typography>
            <Button variant='container' sx={{px:5 , py:1 , mt:2 , backgroundColor:"#222" , boxShadow:"0px 4px 16px rgba(43,52,69,0.1)" , color:"#fff" , borderRadius:"1px" , "&:hover" :{bgcolor:"#151515",boxShadow:"0px 4px 16px rgba(43,52,69,0.1)"}}}>Shop Now</Button>
          </Box>
        </SwiperSlide>
        )
        })}
      </Swiper>
     

    

        <Box  sx={{display:{xs:"none",md:"block"} , minWidth:"26.5%"}}>
           <Box sx={{position:"relative"}}>
            <img src="Assets\banner-17.jpg" alt="banner" width={"100%"}/>



            <Stack sx={{position:"absolute" , top:"50%", transform:"translateY(-50%)" , left:"30px"}}>
              <Typography variant='caption' sx={{color:"#2B3445",fontSize:"18px" }}>NEW ARRIVALS</Typography>
              <Typography variant='h6' sx={{color:"#2B3445", mt:1 }}>SUMMER</Typography>
              <Typography variant='h6' sx={{color:"#2B3445"}}>SALE 20% OFF</Typography>
              <Link href="#" underline='none'  sx={{color:"#2B3445" , display:"flex",alignItems:"center" , gap:"5px", transition:"0.2s", cursor:"pointer", "&:hover":{color:"#D23F57"}}}>Shop now  <ArrowForwardIcon sx={{fontSize:"13px"}}/></Link>
            </Stack>



           </Box>
           <Box sx={{position:"relative"}}>
            <img src="Assets\banner-16.jpg" alt="banner" width={"100%"} />

            <Stack sx={{position:"absolute" , top:"50%", transform:"translateY(-50%)" , left:"30px"}}>
              <Typography variant='caption' sx={{color:"#2B3445",fontSize:"18px" }}>GAMING 4K</Typography>
              <Typography variant='h6' sx={{color:"#2B3445", mt:1 }}>DESKTOPS &</Typography>
              <Typography variant='h6' sx={{color:"#2B3445"}}>LAPTOPS</Typography>
              <Link href="#" underline='none'  sx={{color:"#2B3445" , display:"flex",alignItems:"center" , gap:"5px", transition:"0.2s", cursor:"pointer", "&:hover":{color:"#D23F57"}}}>Shop now  <ArrowForwardIcon sx={{fontSize:"13px"}}/></Link>
            </Stack>
           </Box>
        </Box>

    </Container>
  
  )
}

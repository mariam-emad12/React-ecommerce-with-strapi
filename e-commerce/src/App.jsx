import Header1 from "./Components/header/Header1"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Header2 from "./Components/header/Header2";
import Header3 from "./Components/header/Header3";
import Hero from "./Components/hero/Hero";
import IconSection from "./Components/hero/IconSection";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import ScrollToTop from "./scroll/ScrollToTop";



function App() {
 
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
            <Header1 />
            <Header2 />
            <Header3/>
            <Box sx={{backgroundColor: theme.palette.bg.main }}>
            <Hero/>
            <IconSection/>
            <Main/>
            
            </Box>
            <Footer/>
         <ScrollToTop/>
        </>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App

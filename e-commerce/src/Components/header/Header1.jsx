import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, ListItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const options = [
    "EN",
    "AR"
];

export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ bgcolor: "#2B3445", borderBottomRightRadius: "4px", borderBottomLeftRadius: "4px" }}>
            <Container maxWidth="lg">
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography variant="body2" sx={{ mr: 2, p: "3px 10px", bgcolor: "#D23F57", fontSize: "12px", color: "#fff" , borderRadius:"14px"}}>
                        HOT
                    </Typography>

                    <Typography variant="body2" sx={{ fontSize: "12px", fontWeight: 300, color: "#fff" }}>
                        Free Express Shipping
                    </Typography>




                    <Box flexGrow={1} />


                    {/* Light&Dark Mode Icon */}
                    <div>
                        {theme.palette.mode === "light" ? (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inhert"
                            >
                                <LightModeOutlined fontSize="12px" sx={{ color: "white" }} />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inhert"
                            >
                                <DarkModeOutlined fontSize="12px" sx={{ color: "white" }} />
                            </IconButton>
                        )}
                    </div>

                    <div>
                        <List
                            component="nav"
                            aria-label="Device settings"
                            sx={{ p: 0, m: 0 }}
                        >
                            <ListItem
                                sx={{ cursor: "pointer" }}
                                id="lock-button"
                                aria-haspopup="listbox"
                                aria-controls="lock-menu"
                                aria-label="when device is locked"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClickListItem}
                            >
                                <ListItemText

                                    secondary={options[selectedIndex]}
                                    sx={{ '.MuiTypography-root': { fontSize: "16px", color: "#fff" }, mx: "0px" }}
                                />
                                <ExpandMoreIcon sx={{ color: "#fff" }} />
                            </ListItem>
                        </List>
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'lock-button',
                                role: 'listbox',
                            }}
                        >
                            {options.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    sx={{ fontSize: "14px", padding: "3px 10px", minHeight: "10px", color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>

                    </div>
                    <FacebookIcon fontSize="14px" sx={{ mx: "5px" ,color: "#fff" }} />
                    <TwitterIcon fontSize="14px" sx={{ mx: "5px", color: "#fff" }} />
                    <InstagramIcon fontSize="14px" sx={{ mx: "5px", color: "#fff" }} />




                </Stack>
            </Container>
        </Box>
    )
}

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import STONESK_LOGO from '../menus/image/stonesklogo.jpg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LeftDrawer from './LeftDrawerMenu';
import RightDrawer from './RightDrawerMenu';
import { Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AppBarMenu() {
    const location = useLocation();
    const navigate = useNavigate();

    const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
    const [pageName, setPageName] = useState("");
    const [infoIconColor, setInfoIconColor] = useState("");

    const handleMenu = () => {
        alert("Меню в разработке! Спасибо!");
    };
    const handleInfoPageOpen = () => {
        navigate("info");
    };
    const handleMainPageOpen = () => {
        navigate("main");
    };
    const handleLeftDrawerOpen = () => {
        setLeftDrawerOpen(true);
    };
    const handleRightDrawerOpen = () => {
        setRightDrawerOpen(true);
    };

    useEffect(() => {
        if (location.pathname.includes("main")) {
            setPageName("Главная");
            setInfoIconColor("inherit");
        } else if (location.pathname.includes("info")) {
            setPageName("Инфа о приложении");
            setInfoIconColor("warning");
        }
    }, [location]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: '#4C4745' }}>
                <Toolbar sx={{ mx: 20 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={handleLeftDrawerOpen}
                    >
                        <Tooltip title="Меню">
                            <MenuIcon />
                        </Tooltip>
                    </IconButton>
                    <Box sx={{ cursor: 'pointer' }} onClick={handleMainPageOpen}>
                        <img src={STONESK_LOGO} alt="stonesklogo" />
                    </Box>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} align="center">
                        {pageName}
                    </Typography>
                    <IconButton
                        size="large"
                        onClick={handleRightDrawerOpen}
                        color="inherit"
                    >
                        <Tooltip title="Профиль">
                            <AccountCircle />
                        </Tooltip>
                    </IconButton>
                    <IconButton
                        size="large"
                        onClick={handleInfoPageOpen}
                        color="inherit"
                    >
                        <Tooltip title="Инфо">
                            <ErrorOutlineIcon color={infoIconColor} />
                        </Tooltip>
                    </IconButton>
                    <IconButton
                        size="large"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <Tooltip title="Выход">
                            <ExitToAppIcon />
                        </Tooltip>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <LeftDrawer opened={leftDrawerOpen} opener={setLeftDrawerOpen} />
            <RightDrawer opened={rightDrawerOpen} opener={setRightDrawerOpen} />
        </Box>
    );
}

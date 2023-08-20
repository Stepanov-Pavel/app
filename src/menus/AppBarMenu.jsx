import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stonesk_Logo from '../menus/image/stonesklogo.jpg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LeftDrawerMenu from './LeftDrawerMenu';
import RightDrawerMenu from './RightDrawerMenu';
import { Tooltip } from '@mui/material';

export default function AppBarMenu() {
    const [leftDrawerOpen, setLeftDrawerOpen] = React.useState(false);
    const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

    const handleMenu = () => {
        alert("Меню в разработке! Спасибо!");
    };
    const handleLeftDrawerOpen = () => {
        setLeftDrawerOpen(true)
    };
    const handleRightDrawerOpen = () => {
        setRightDrawerOpen(true)
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: '#4C4745' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={handleLeftDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}>
                        <img src={Stonesk_Logo} alt="stonesklogo" />
                    </Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Название страницы
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
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <Tooltip title="Инфо">
                            <ErrorOutlineIcon />
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
            <LeftDrawerMenu opened={leftDrawerOpen} opener={setLeftDrawerOpen} />
            <RightDrawerMenu opened={rightDrawerOpen} opener={setRightDrawerOpen} />
        </Box>
    );
}

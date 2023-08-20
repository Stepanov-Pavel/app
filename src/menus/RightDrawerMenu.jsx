import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Avatar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export default function RightDrawerMenu({ opened, opener }) {
    const toggleDrawer = () => {
        opener(false);
    };
    const handleMenu = () => {
        alert("Меню в разработке! Спасибо!");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Drawer
                anchor='right'
                open={opened}
                onClose={toggleDrawer}
            >
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ margin: '5px' }}
                >
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Avatar alt="avatar" sx={{ width: 56, height: 56 }} />
                    </Stack>
                    <Typography variant="h6">
                        Пользователь Пользаков Пользакович
                    </Typography>
                    <Typography variant="subtitle1">
                        (PolzovatelPP)
                    </Typography>
                </Stack>
                <Divider />
                <Typography variant="subtitle1" align="center">
                    АДМИНИСТРАТОР
                </Typography>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemButton onClick={handleMenu}>
                            <ListItemIcon>
                                <SettingsSuggestIcon sx={{ color: 'black' }} fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary="Настройки" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HailIcon from '@mui/icons-material/Hail';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandymanIcon from '@mui/icons-material/Handyman';
import CarpenterIcon from '@mui/icons-material/Carpenter';

export default function LeftDrawerMenu({ opened, opener }) {
    const toggleDrawer = () => {
        opener(false);
    };
    const handleMenu = () => {
        alert("Меню в разработке! Спасибо!");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Drawer
                anchor="left"
                open={opened}
                onClose={toggleDrawer}
            >
                <Box>
                    <List>
                        <ListItem>
                            <ListItemButton onClick={handleMenu}>
                                <ListItemIcon>
                                    <LocalAtmIcon sx={{ color: 'black' }} fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Сметы" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={handleMenu}>
                                <ListItemIcon>
                                    <HailIcon sx={{ color: 'black' }} fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Заказчики" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={handleMenu}>
                                <ListItemIcon>
                                    <AccountBalanceIcon sx={{ color: 'black' }} fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Объекты" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemButton onClick={handleMenu}>
                                <ListItemIcon>
                                    <CarpenterIcon sx={{ color: 'black' }} fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Материалы" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={handleMenu}>
                                <ListItemIcon>
                                    <ConstructionIcon sx={{ color: 'black' }} fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Работы" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={handleMenu}>
                                <ListItemIcon>
                                    <HandymanIcon sx={{ color: 'black' }} fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Услуги" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

/* eslint-disable react/prop-types */
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { fonts } from '../../theme/fonts';
import {colors} from '../../theme/colors';
export function MobileNavbar({
    navItems,
    container,
    mobileOpen,
    handleDrawerToggle,
}) {


    return <Drawer anchor='top' container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{
        keepMounted: true
    }} sx={{
        display: {
            xs: 'block',
            sm: 'none'
        },
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100vw'
        }
    }}>
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: colors().white
     }}>
            <Typography variant="h6" sx={{ my: 2, fontFamily: fonts().primary, color: colors().darkBrown }}>
                Bokor Ármin
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.page} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText onClick={item.scroll} primary={item.page} sx={{ fontFamily: fonts().primary, color: colors().darkBrown }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>;
}

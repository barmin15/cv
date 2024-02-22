/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MobileNavbar } from './MobileNavbar';
import React, {useRef} from "react";

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import LandingPage from "../../pages/LandingPage";

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: {
            backgroundColor: trigger ? colors().green : 'transparent',
            color: trigger ? 'white' : colors().green
        },
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export function MonitorNavbar({
    props,
    handleDrawerToggle,
    container,
    mobileOpen,
}) {
    const ref = useRef();
      //references for scrolling to components
      const homeRef = useRef(null);
      const aboutRef = useRef(null);
      const resumeRef = useRef(null);
      const contactRef = useRef(null);
  
  
      const scrollToAbout = () => {
          if (aboutRef.current) {
              aboutRef.current.scrollIntoView({ behavior: 'smooth' });
          }
      };

      const scrollToHome = () => {
        if (homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToResume = () => {
        if (resumeRef.current) {
            resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollTocontact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { page: 'Home', scroll: scrollToHome },
        { page: 'About', scroll: scrollToAbout },
        { page: 'Resumé', scroll: scrollToResume },
        { page: 'Conatact', scroll: scrollTocontact }
    ]

    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }}>
        <CssBaseline />
        <ElevationScroll {...props}>
            <AppBar component="nav" sx={{
                height: {
                    xs: '45px',
                    sm: '40px'
                }
            }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{
                        mr: 2,
                        display: {
                            sm: 'none'
                        }
                    }}>
                        <MenuIcon fontSize='small' sx={{
                            marginBottom: '10px'
                        }} />
                    </IconButton>
                    {navItems.map(item => <Typography onClick={item.scroll} sx={{
                        fontFamily: fonts().primary,
                        paddingLeft: '30px',
                        paddingBottom: '22px',
                        display: {
                            xs: 'none',
                            sm: 'block'
                        },
                        '&:hover': {
                            color: colors().darkBrown,
                            cursor: 'pointer'
                        }
                    }} key={item.page}>{item.page}</Typography>)}
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <nav>
           <MobileNavbar navItems={navItems}   container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}  />
        </nav>
        <Box component="main" sx={{
            width: '100vw',
            flex: 1,
            marginTop: '-45px'
        }}>
            <LandingPage aboutRef={aboutRef} homeRef={homeRef} contactRef={contactRef} resumeRef={resumeRef} />
        </Box>
    </Box>;
}

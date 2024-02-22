/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

import { MonitorNavbar } from './components/MonitorNavbar';
import PropTypes from 'prop-types';

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);


  

    //handle opening the drawer on mobilke devices
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <MonitorNavbar props={props} handleDrawerToggle={handleDrawerToggle} container={container} mobileOpen={mobileOpen} />
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;

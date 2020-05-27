import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import { AuthContext } from '../../context/auth-context';
import './MainNavigation.css';
// import Auth from '../../../user/pages/Auth';

const MainNavigation = props => {
    const auth = useContext(AuthContext);

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true)
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false)
    };

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            {auth.isLoggedIn && (
                <MainHeader>
                <button className="main-navigation__settings-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h2 className="main-navigation__title">
                    <Link to="/">WhatsappClone</Link>
                </h2>
                </MainHeader>
            )}
        </React.Fragment>
    )
};

export default MainNavigation;
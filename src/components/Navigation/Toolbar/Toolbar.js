import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';
import './Toolbar.css';

const toolbar = (props) => (
    <header className={'Toolbar'}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={'LogoToolbar'}>
            <Logo />
        </div>
        <nav className={'DesktopOnly'}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
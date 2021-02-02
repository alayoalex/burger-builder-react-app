import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';

const toolbar = (props) => (
    <header className={'Toolbar'}>
        <div>MENU</div>
        <div className={'LogoToolbar'}>
            <Logo />
        </div>
        <nav className={'DesktopOnly'}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
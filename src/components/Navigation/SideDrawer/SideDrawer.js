import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliar/Auxiliar';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';


const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return (
        <Aux>
            <Backdrop 
                show={props.open} 
                clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={'LogoSidedrawer'}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
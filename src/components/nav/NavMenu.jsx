import React            from 'react';
import { NavLink }      from 'react-router-dom';
import * as routes      from '../../constants/routes';

import Hamburger        from './Hamburger';

import './nav.css';

const NavMenu = ({user, clickSignOut, clearReading, openSignIn}) => {
    const toggleNavMenu = () => {
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('view-menu');
        menu.classList.toggle('hide-menu');
        document.getElementById('hamburger-btn').classList.toggle('hamburger-close');
    };
    
    return (<>
        <Hamburger hamburgerFunction={toggleNavMenu}/>
        <div id="nav-menu" className="hide-menu">
            <div>
                
                <NavLink exact to={routes.HOME} onClick={() => {toggleNavMenu();}}>HOME</NavLink>
                <NavLink to={routes.SERV} onClick={() => {toggleNavMenu();}}>SERVICES</NavLink>
                <NavLink to={routes.MAIL} onClick={() => {toggleNavMenu();}}>CONTACT</NavLink>
            </div>
        </div>
    </>);
};

export default NavMenu;
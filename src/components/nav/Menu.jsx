import React from 'react';

import Hamburger from './Hamburger';

import './nav.css';

const Menu = (props) => {
    const toggleMenu = () => {
        const menu = document.getElementById('ham-menu');
        menu.classList.toggle('hide-menu');
        document.getElementById('hamburger-btn').classList.toggle('hamburger-close');
    }
return (<>
    <Hamburger hamburgerFunction={toggleMenu} hamburgerStyle='draw-menu-style'/>
    <div id="ham-menu" className="hide-menu">
        <div>
            {props.children}       
        </div>
    </div>
    </>)
}

export default Menu;
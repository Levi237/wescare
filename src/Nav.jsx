import React        from 'react';
import { NavLink }  from 'react-router-dom';
import * as routes  from './constants/routes';

const Nav = () => {
    return(
        <nav>
            <NavLink activeclassname="active" to={routes.HOME} onClick={() => {}}>HOME</NavLink>
            <NavLink activeclassname="active" to={routes.SERV} onClick={() => {}}>SERVICES</NavLink>
            <NavLink activeclassname="active" to={routes.MAIL} onClick={() => {}}>CONTACT</NavLink>
        </nav>
    );
};
export default Nav;
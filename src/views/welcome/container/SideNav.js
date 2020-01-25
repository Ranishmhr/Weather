import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

const SideNav = (props) => (
    <div className='side-nav'>
        {props.sideNavItems.map((item, key) =>
            <NavLink key={key}
                     to={item.path}
                     exact={item.exact}
                     activeClassName={'active'}>
                {item.label}
            </NavLink>
        )}
    </div>

);
export default SideNav;

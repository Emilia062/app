import React from 'react';
import background from './assets/background.jpg'
import {NavLink, Link} from "react-router-dom";


const Nav = () => {
    return (
        <div className={"nav"}>
            <div className={"nav__header"}>
                <img src={background} alt={"background"} className={"nav__header--background"}/>
                <h1 className={"nav__logo logo"}>Rosmarino</h1>
            </div>
            <div className={"nav__links"}>
                <NavLink to={{pathname: "/menu", hash: "#pizza"}} className={"nav__link"}>Pizza</NavLink>
                <Link to={{pathname: "/menu/", hash: "#pasta"}} className={"nav__link"}>Makarony</Link>
                <Link to="menu/#foccacia" className={"nav__link"}>Foccacia</Link>
                <NavLink to="/salads" className={"nav__link"}>Sałatki</NavLink>
                <NavLink to="/beverages" className={"nav__link"}>Kawy i napoje</NavLink>
            </div>
        </div>
    );
};

export default Nav;
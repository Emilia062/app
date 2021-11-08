import React from 'react';
import background from './assets/background.jpg'
import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <div className={"nav"}>
            <div className={"nav__header"}>
                <img src={background} alt={"background"} className={"nav__header--background"}/>
                <h1 className={"nav__logo"}>Rosmarino</h1>
            </div>
            <div className={"nav__links"}>
                <Link to={{hash:"#pizza"}} className={"nav__link"}>Pizza</Link>
                <Link to={{ hash:"#pasta"}} className={"nav__link"}>Makarony</Link>
                <Link to={{hash:"#menu"}} className={"nav__link"}>Foccacia</Link>
                <Link to={{hash:"#salads"}} className={"nav__link"}>Sałatki</Link>
                <Link to={{hash:"#beverages"}} className={"nav__link"}>Kawy i napoje</Link>
            </div>
        </div>
    );
};

export default Nav;
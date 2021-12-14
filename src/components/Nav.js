import React from 'react';
import background from '../assets/background.jpg';

const Nav = () => {
    return (
        <div className={"nav"}>
            <div className={"nav__header"}>
                <img src={background} alt={"background"} className={"nav__header--background"}/>
                <h1 className={"nav__logo logo"}>Rosmarino</h1>
            </div>
            <div className={"nav__menu"}>
                <div className={"line"}> </div>
                <h1 className={"nav__menu--title"}>Menu</h1>
                <div className={"line"}> </div>
            </div>
        </div>
    );
};

export default Nav;
import React from 'react';
import rosemary from './assets/rosemary.jpg'


const Nav = () => {
    return (
        <div className={"nav"}>
            <div className={"nav__header"}>
                <img src={rosemary} alt={"rosemary"} className={"nav__header--rosemary"}/>
                <h1 className={"nav__logo"}>Rosmarino</h1>
            </div>
            <div className={"nav__links"}>
                <a href={"#pizza"} className={"nav__link"}>Pizza</a>
                <a href={"#pasta"} className={"nav__link"}>Makarony</a>
                <a href={"#foccacia"} className={"nav__link"}>Foccacia</a>
                <a href={"#salads"} className={"nav__link"}>Sałatki</a>
                <a href={"#beverages"} className={"nav__link"}>Kawy i napoje</a>
            </div>
        </div>
    );
};

export default Nav;
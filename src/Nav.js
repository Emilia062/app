import React from 'react';
import rosemary from './assets/noun_Rosemary_224333.svg'


const Nav = () => {
    return (
        <div className={"nav"}>
            <div className={"nav__logo"}>
                <img src={rosemary} alt={"rosemary"} className={"nav__logo--rosemary"}/>
                <h1><span className={"nav__logo--R"}>R</span><span className={"nav__logo--second-part"}>osmarino</span></h1>
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
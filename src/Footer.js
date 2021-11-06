import React from 'react';

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"footer__contact"}>
                <p>Kontakt do nas:</p>
                <span><i className="fas fa-phone footer__icon"></i> tel. 111 111 111</span>
                <span><i className="fas fa-at footer__icon"></i>e-mail: rosmarino@mail.com</span>
            </div>
            <div className={"footer__social-media"}>
                <p>Znajdź nas na:</p>
                <span className={"footer__icons"}>
                    <a href={"https://www.facebook.com/"} className={"footer__link"}><i className="fab fa-facebook"></i></a>
                    <a href={"https://www.instagram.com/"} className={"footer__link"}><i className="fab fa-instagram"></i></a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
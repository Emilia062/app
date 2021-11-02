import React from 'react';

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"container"}>
            <div> Kontakt do nas:</div>
            <div className={"footer__contact"}>
                <span><i className="fas fa-phone"></i> tel. 111 111 111</span>
                <span><i className="fas fa-at"></i>e-mail: rosmarino@mail.com</span>
            </div>
            <span className={"footer__social-media"}>Znajdź nas na:</span>
            <span className={"footer__icons"}>
                <a href={"https://www.facebook.com/"}><i className="fab fa-facebook"></i></a>
                <a href={"https://www.instagram.com/"}><i className="fab fa-instagram"></i></a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
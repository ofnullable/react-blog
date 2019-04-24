import React from 'react';

const Header = ({ title }) => {
    return (
        <nav className="main-header clearfix">
            <div className="header-hamburger">
            </div>
            <div className="header-brand">
                <h1 id="header-title">{title}</h1>
                <span className="blink"></span>
            </div>
            <div className="header-menu">
            </div>
        </nav>
    );
}

export default Header;
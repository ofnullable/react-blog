import React from 'react';

const MobileMenu = ({ title, active }) => {
    return (
        <div>
            <a className={active ? "nav-item active" : "nav-item"} id={title}>
                {title}
            </a>
        </div>
    );
}

export default MobileMenu;
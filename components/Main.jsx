import React, { useState } from 'react';
import Menu from './Menu';

const Main = ({ contents }) => {
    const [active, setActive] = useState('About');
    
    const onMenuClick = (e) => {
        const targetId = e.target.id;
        if (targetId === 'content-nav') {
            return;
        }
        if (targetId === 'Portfolio') {
            window.wrapper.classList.add('extended');
        } else {
            window.wrapper.classList.remove('extended');
        }
        setActive(targetId);
    };

    const renderMenu = type => {
        return Object.keys(contents).map((c, i) => {
            return (
                <Menu key={`${i}번째 ${type}`} type={type} title={c} active={active === c} />
            )
        });
    };

    const renderContent = (active) => {
        return contents[active]();
    };

    return (
        <>
            <div className="main">
                <nav id="content-nav" onClick={onMenuClick}>
                    { renderMenu('Menu') }
                </nav>
                <div id={active} className="content active">
                    { renderContent(active) }
                </div>
            </div>
            <nav id="bottom-menu" onClick={onMenuClick}>
                { renderMenu('MobileMenu') }
            </nav>
        </>
    );
}

export default Main;
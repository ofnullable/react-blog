import React, { useState } from 'react';
import Menu from './Menu';
import About from './About';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Guestbook from './Guestbook';

const contents = { 
    About: <About />, 
    Blog: <Blog />, 
    Portfolio : <Portfolio />, 
    Guestbook: <Guestbook />,
};

const Main = () => {
    const [active, setActive] = useState('About');
    
    const onMenuClick = (e) => {
        const targetId = e.target.id;
        const classList = window.wrapper.classList;
        if (targetId === 'content-nav') {
            return;
        }
        if (targetId === 'Portfolio') {
            classList.add('extended');
        } else {
            classList.remove('extended');
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

    return (
        <>
            <div className="main">
                <nav id="content-nav" onClick={onMenuClick}>
                    { renderMenu('Menu') }
                </nav>
                <div id={active} className="content active">
                    { contents[active] }
                </div>
            </div>
            <nav id="bottom-menu" onClick={onMenuClick}>
                { renderMenu('MobileMenu') }
            </nav>
        </>
    );
}

export default Main;
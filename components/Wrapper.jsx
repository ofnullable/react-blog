import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import About from './About';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Guestbook from './Guestbook';

const Wrapper = () => {
    const contents = {About, Blog, Portfolio, Guestbook};

    return (
        <>
            <Header title={"Blog - Hello World!"} />
            <Main contents={contents} />
        </>
    );
}

export default Wrapper;
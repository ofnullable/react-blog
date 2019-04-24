import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import About from './About';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Guestbook from './Guestbook';

const contents = {About, Blog, Portfolio, Guestbook};

const Wrapper = () => {
    return (
        <>
            <Header title={"Blog - Hello World!"} />
            <Main contents={contents} />
        </>
    );
}

export default Wrapper;
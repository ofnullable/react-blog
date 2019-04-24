import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Wrapper from './components/Wrapper';

const Hot = hot(Wrapper);

ReactDom.render(<Hot />, document.querySelector('#wrapper'));
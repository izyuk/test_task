import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Wrapper />,
    document.getElementById('root')
);
registerServiceWorker();

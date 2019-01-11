// React语法
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 把引入的App挂载到public/index.html文件的"#root"元素上
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

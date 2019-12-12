import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import wallpaper from "./wallpaper1.jpg";

document.body.style="background-image:url("+wallpaper+")";
document.body.style.opacity='0.7';
document.body.style.backgroundAttachment="fixed";
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import './index.css';
import $ from "jquery";
import 'bootstrap';
import * as serviceWorker from './serviceWorker';

const pathname = document.location.pathname.replace('/','')
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App data={{pathname}} />,
    $('#root')[0]
  )
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

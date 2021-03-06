import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from './App';
import Game from './Game';
import Settings from './Settings';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/game" component={Game} />
    <Route path="/settings" component={Settings} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

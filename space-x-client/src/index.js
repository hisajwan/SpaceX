import React from 'react';
import { hydrate } from 'react-dom';
// import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
// import store from "./store";
import reportWebVitals from './reportWebVitals';

hydrate(
  // <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

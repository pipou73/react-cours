import React from 'react';
import 'babel-polyfill';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './middleWareApi/app.js'
import './index.css'
import {data, accessToken} from './middleWareApi/reducer/reducer'
import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';

let middlewares = window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(apiMiddleware), applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    : compose(applyMiddleware(apiMiddleware), applyMiddleware(thunk))


let store = createStore(combineReducers({ data, accessToken}), middlewares)

ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>
    , document.getElementById('root'));

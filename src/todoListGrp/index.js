import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './todoListGrp/app.js'
import './index.css'
import { createStore } from 'redux'
import {todoGrplist, todoList, currentTodoGrp} from './todoListGrp/reducer'
import { combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

let middlewares = window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(thunk)


let store = createStore(combineReducers({ todoGrplist ,todoList, currentTodoGrp}), middlewares)

ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>
    , document.getElementById('root'));

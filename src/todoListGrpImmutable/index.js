import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './todoListGrpImmutable/app.js'
import './index.css'
import {todoGrplist, todoList, currentTodoGrp} from './todoListGrpImmutable/reducer'
import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
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

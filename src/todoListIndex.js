import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './todoList/app.js'
import './index.css'
import { createStore } from 'redux'
import {todoList, visibilityFilter} from './todoList/reducer'
import { combineReducers } from 'redux'

let store = createStore(combineReducers({totoList: todoList, visibilityFilter: visibilityFilter}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>
    , document.getElementById('root'));

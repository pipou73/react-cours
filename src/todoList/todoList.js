import React from 'react';
import { connect } from 'react-redux'
import Todo from './todo'
function getVisibilityFilterTodos(todos, visibilityFilter) {
    switch (visibilityFilter) {
        case 'COMPLETED':
            return todos.filter((todo, id) => todo.completed === true);
        case 'UNCOMPLETED':
            return todos.filter((todo, id) => todo.completed === false);
        default:
            return todos;
    }
}
let todoList = function todoList ({todos, onTodoClick, title, removeTodoClick}) {
    return <div>
            <label >{title}</label>
            <ul>
                {todos.map(e => <Todo key={e.id} text={e.text} completed={e.completed} onClick={() => onTodoClick(e.id)} onRemove={() => removeTodoClick(e.id)} />)}
            </ul>
    </div>
}

const mapPropsTodoList = function (state, ownProps) {
    return { todos : getVisibilityFilterTodos(state.totoList, state.visibilityFilter)}
};

const mapDispatchTodoList = function (dispatch, ownProps) {
    return {
        onTodoClick : (id) =>  dispatch({
            type : 'TODO_TOOGLE',
            id: id
        }),
        removeTodoClick : (id) =>  dispatch({
            type : 'TODO_REMOVE',
            id: id
        })
    }
};

todoList = connect(mapPropsTodoList, mapDispatchTodoList)(todoList);

export default todoList ;
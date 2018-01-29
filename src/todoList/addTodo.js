import React from 'react';
import { connect } from 'react-redux'
let count = 0;
let AddTodo = function AddTodo ({dispatch}) {
    let input;
    return <div>
        <input type="text" ref={(node) => (input = node)}/>
        <button onClick={(e) => {
                e.preventDefault();
                dispatch({
                    type: 'ADD_TODO',
                    text: input.value,
                    id: count++
                })
                input.value = '';
            }
        }>Add Todo</button>
    </div>
}

AddTodo = connect(null,null)(AddTodo);

export default AddTodo;
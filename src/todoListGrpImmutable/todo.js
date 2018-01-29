import React from 'react';
function Todo({text, onDelete, onClick , completed = false}) {
    return <li style={{
        textDecoration: !completed ? 'line-through' : 'none',
    }}><label onClick={onClick} >{text}</label><button onClick={onDelete}>Remove</button></li>
}

export default Todo;
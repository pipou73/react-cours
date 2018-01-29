import React from 'react';
function AddTodoGrp({onClick, text}) {
    let input;
    return <div>
        <input type="text" ref={(node) => input = node}/>
        <button onClick={(e) => {
            e.preventDefault();
            onClick(input.value);
            input.value = '';
        }}>{text}</button>
    </div>
}

export default AddTodoGrp;
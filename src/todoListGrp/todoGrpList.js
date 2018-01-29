import React from 'react';
import Todo from './todo'
function TodoGrpList({todoGrplist, selectTodoGrp, removeTodoGrp}) {
    return <div>
        <ul>
            {todoGrplist.map((todoGrp) =>
                <Todo
                    key={todoGrp.id} text={todoGrp.grpName}
                    id={todoGrp.id} onClick={() => selectTodoGrp(todoGrp.id)}
                    onDelete={() => removeTodoGrp(todoGrp.id)}
                    completed={!todoGrp.active}
                />
            )}
        </ul>
    </div>
}

export default TodoGrpList;
import React from 'react';
import Todo from './todo'
function TodoGrpList({todoGrplist, selectTodoGrp, removeTodoGrp}) {
    return <div>
        <ul>
            {todoGrplist.map((todoGrp, index) => {
                    return <Todo
                        key={index} text={todoGrp.get('name')}
                        id={index} onClick={() => selectTodoGrp(index)}
                        onDelete={() => removeTodoGrp(index)}
                        completed={!todoGrp.get('completed')}
                    />
                }
            )}
        </ul>
    </div>
}

export default TodoGrpList;
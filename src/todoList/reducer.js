export function todoList (state= [] , action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id : action.id,
                    text : action.text,
                    completed : false
                }
            ];
        case 'TODO_TOOGLE':
            return state.map((todo, id) => {
                if ( todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });
        case 'TODO_REMOVE':
            return state.filter((todo, id) => todo.id !== action.id);

        default:
            return state;
    }
}


export function visibilityFilter (state = 'ALL' , action) {
    if(action.type !== 'VISIBILITY_FILTER') {
        return state;
    }

    return action.visibilityFilter
}

export default todoList;
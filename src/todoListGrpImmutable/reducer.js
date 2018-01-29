import immutable from 'immutable'
export function todoGrplist(state = immutable.List(), action) {
    switch (action.type) {
        case 'ADD_GRP':
            return state.push(immutable.Map({
                name : action.name,
                completed: false
            }));
        case 'REMOVE_GRP':
            return state.remove(action.id)
        default:
            return state;
    }
}

export function todoList(state = immutable.List(), action) {
    switch(action.type) {
        case 'ADD_TODO':
            return state.push(immutable.Map({
                    name: action.name,
                    grp: action.grp,
                    completed: false
                }));
        case 'REMOVE_TODO':
            return state.remove(action.id);
        case 'TOGGLE_TODO':
            return state.update(action.id, (obj) => obj.set('completed', !obj.get('completed')));
        case 'REMOVE_TODO_GRP':
            return state.filterNot((todo) => todo.get('grp') === action.grp)

        default:
            return state;
    }
}

export function currentTodoGrp(state = null, action) {
    switch(action.type) {
        case 'SELECT_GRP':
            return action.currentTodoGrp;
        default:
            return state;
    }
}


export default todoGrplist ;
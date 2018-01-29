export function todoGrplist(state = [], action) {
    switch (action.type) {
        case 'ADD_GRP':
            let lastId = state.map(x => x.id).indexOf(Math.max(...state.map(x => x.id)));
            return [
                ...state,
                {
                    grpName : action.name,
                    active: true,
                    id: (lastId !== -1) ? ++lastId : 0
                }
            ];
        case 'REMOVE_GRP':
            return state.filter(todoGrp => todoGrp.id !== action.id)
        default:
            return state;
    }
}

export function todoList(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            let lastId = state.map(x => x.id).indexOf(Math.max(...state.map(x => x.id)));
            return [
                ...state,
                {
                    text : action.name,
                    id : (lastId !== -1) ?  ++lastId : 0,
                    grp: action.grp
                }
            ]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)

        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
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
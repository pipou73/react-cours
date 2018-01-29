import { connect } from 'react-redux'
import TodoList from './todoGrpList'

function mapsToPropsTodoGrpListContainer(state) {
    return {
        todoGrplist: state.todoList.filter((todo) => todo.get('grp') === state.currentTodoGrp)
    }
}

function mapsToDispatchTodoListContainer(dispatch) {
    return {
        selectTodoGrp (id) {
            dispatch({
                type: 'TOGGLE_TODO',
                id: id
            })
        },
        removeTodoGrp(id) {
            dispatch({
                type: 'REMOVE_TODO',
                id: id
            });
        },
    }
}

function mapsToMergeTodoGrpListContainer(state, dispatch, ownProps) {
    return {
        ...state,
        ...dispatch,
        removeTodo (id) {
            dispatch({
                type: 'REMOVE_TODO',
                id: id
            })
        }
    }
}

export default connect(mapsToPropsTodoGrpListContainer, mapsToDispatchTodoListContainer, mapsToMergeTodoGrpListContainer)(TodoList);
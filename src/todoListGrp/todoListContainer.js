import { connect } from 'react-redux'
import TodoList from './todoGrpList'

function mapsToPropsTodoGrpListContainer(state) {
    return {
        todoGrplist: state.todoList.filter(todo => todo.grp === state.currentTodoGrp)
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

export default connect(mapsToPropsTodoGrpListContainer, null, mapsToMergeTodoGrpListContainer)(TodoList);
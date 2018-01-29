import { connect } from 'react-redux'
import TodoGrpList from './todoGrpList'

function mapsToPropsTodoGrpListContainer(state) {
    return {
        todoGrplist: state.todoGrplist
    }
}

function mapsToDispatchTodoGrpListContainer(dispatch, ownProps) {
    return {
        selectTodoGrp (id) {
            dispatch({
                type: 'SELECT_GRP',
                currentTodoGrp: id
            });
        },
        dispatch
    }
}

function mapsToMergeTodoGrpListContainer(state, dispatch, ownProps) {
    return {
        ...state,
        ...dispatch,
        removeTodoGrp (id) {
            dispatch.dispatch((dispatch, getState) => {
                dispatch({
                    type: 'REMOVE_GRP',
                    id: id
                })
                let localState = getState()
                if (localState.currentTodoGrp === id) {
                    dispatch({
                        type: 'SELECT_GRP',
                        currentTodoGrp: localState.todoGrplist.length === 1 ? null : 0
                    })
                }
                dispatch({
                    type: 'REMOVE_TODO_GRP',
                    grp: id
                })
            })
        }
    }
}

export default connect(mapsToPropsTodoGrpListContainer, mapsToDispatchTodoGrpListContainer, mapsToMergeTodoGrpListContainer)(TodoGrpList);
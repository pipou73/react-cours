import { connect } from 'react-redux'
import AddTodo from './addTodoGrp'
function mapToPropsAddTodo(state, ownProps) {
    return {
        text: 'Add Todo',
        currentTodoGrp: state.currentTodoGrp
    }
}
//
//
// function mapToDispatchAddTodo(dispatch, ownProps) {
//     return {}
// }

function mapToMergeProps(state, dispatch, ownProps) {
    return {
        ...state,
        onClick (value) {
            dispatch.dispatch({
                type: 'ADD_TODO',
                name: value,
                grp: state.currentTodoGrp
            });
        }
    }
}

export default connect(mapToPropsAddTodo, null, mapToMergeProps)(AddTodo);
import AddTodoGrp from './addTodoGrp'
import { connect } from 'react-redux'

function mapsToPropsToDoGrpContainer(state, ownProps){
    return {
        todoGrp: state.todoGrpList,
        text: 'Add Todo Group'
    }
}
function mapsToDispatchToDoGrpContainer(dispatch, ownProps){
    return {
        onClick (value) {
            dispatch((dispatch, getState) => {
                const state = getState()
                dispatch({
                    type: 'ADD_GRP',
                    name: value,
                });
                console.log(state)
                if (state.todoGrplist.length === 0) {
                    dispatch({
                        type: 'SELECT_GRP',
                        currentTodoGrp: 0,
                    });
                }
            })

        }
    }
}
export default connect(mapsToPropsToDoGrpContainer, mapsToDispatchToDoGrpContainer)(AddTodoGrp);

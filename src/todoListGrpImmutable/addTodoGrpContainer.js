import AddTodoGrp from './addTodoGrp'
import { connect } from 'react-redux'
import Alertify from 'alertifyjs'

function mapsToPropsToDoGrpContainer(state, ownProps){
    return {
        todoGrp: state.todoGrplist,
        text: 'Add Todo Group'
    }
}
function mapsToDispatchToDoGrpContainer(dispatch, ownProps){
    return {
        onClick (value) {
            dispatch((dispatch, getState) => {
                const state = getState()
                let alreadyExist = state.todoGrplist.find(i => i.get('name') === value)
                console.log(alreadyExist)
                if (alreadyExist) {
                    Alertify.error(`ce group ${value} existe déjà`)
                    return;
                }

                dispatch({
                    type: 'ADD_GRP',
                    name: value,
                });

                if (state.todoGrplist.isEmpty()) {
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

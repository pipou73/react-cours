import FormApiSender from '../component/form_api_sender'
import { connect } from 'react-redux'
import { CALL_API } from 'redux-api-middleware';

function mapsToPropsToFormApiConnectContainer(state, ownProps){
    return {
        couple: state.data.couple,
        show: Boolean(state.accessToken),
        token : state.accessToken
    }
}
function mapsToDispatchFormApiConnectContainer(dispatch, ownProps){
    return {
        dispatch,
        successDispatch(voucherNumber, trackingNumber) {
            dispatch({
                'type' : 'SAVE_COUPLE',
                'voucherNumber': voucherNumber,
                'trackingNumber' : trackingNumber
            })
        },
        removeDispatch() {
            dispatch({
                'type': 'REMOVE_TOKEN',
            })
        }
    }
}
function mapsToMergeFormApiConnectContainer(propsState, propsDispatch, ownProps){
    return {
        ...propsState,
        ...propsDispatch,
        onSubmit (voucherNumber, trackingNumber) {
            propsDispatch.dispatch({
                [CALL_API]: {
                    endpoint: 'http://atelierdefamille.shop/api/orders/'+ voucherNumber + '/ship' ,
                    method: 'PUT',
                    credentials: 'include',
                    headers: {
                        "Content-Type" : "application/json",
                        "Accept": "*/*",
                        "Authorization" : "Bearer " + propsState.token,
                    },
                    body: JSON.stringify({
                        "tracking": trackingNumber,
                    }),
                    types: [
                        'REQUEST',
                        {
                            type: 'SUCCESS',
                            payload: (action,state,response) => {
                                propsDispatch.successDispatch(voucherNumber, trackingNumber)
                            }
                        },
                        {
                            type: 'FAILURE',
                            payload: (action, state, response) => {
                                if ([401, 403].indexOf(response.status) !== -1) {
                                    propsDispatch.removeDispatch()
                                }
                            }
                        }
                    ]
                }
            })

        }
    }
}
export default connect(mapsToPropsToFormApiConnectContainer, mapsToDispatchFormApiConnectContainer, mapsToMergeFormApiConnectContainer)(FormApiSender);

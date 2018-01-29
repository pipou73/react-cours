import FormApiConnect from '../component/form_api_connect'
import { connect } from 'react-redux'
import { CALL_API } from 'redux-api-middleware';

function mapsToPropsToFormApiConnectContainer(state, ownProps){
    return {
        login: state.data.login,
        password: state.data.password,
        show: !state.accessToken
    }
}
function mapsToDispatchFormApiConnectContainer(dispatch, ownProps){
    return {
        onSubmit (login, password) {
            dispatch({
                [CALL_API]: {
                    endpoint: 'http://atelierdefamille.shop/api/login_check',
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-Type" : "application/json",
                        "Accept": "*/*"
                    },
                    body: JSON.stringify({
                        "_username": login,
                        "_password": password
                    }),
                    types: [
                        'REQUEST',
                        {
                            type: 'SUCCESS',
                            payload: (action,state,response) => {
                                response.json().then(data => {
                                    let token = data.token;
                                    dispatch({
                                        'type' : 'SAVE_TOKEN',
                                        'token': token,
                                        'password': password,
                                        'login': login
                                    })
                                });
                            }
                        },
                        {
                            type: 'FAILURE',
                            payload: (action, state, response) => {
                                console.log(response);
                                if (!!state.accessToken && ([401, 403].indexOf(response.code))) {
                                    dispatch({
                                        'type': 'REMOVE_TOKEN',
                                    })
                                }
                            }
                        }
                    ]
                }
            })

        }
    }
}
export default connect(mapsToPropsToFormApiConnectContainer, mapsToDispatchFormApiConnectContainer)(FormApiConnect);

import immutable from 'immutable'
export function accessToken(state = null, action) {
   if(action.type === 'SAVE_TOKEN')
       return action.token;

   if(action.type === 'REMOVE_TOKEN')
        return null;

   return state;
}

export function data(state = immutable.Map({
    login: null,
    password: null,
    couple: item(),
}), action) {

    switch (action.type) {
        case 'SAVE_TOKEN' :
            return state
                .set('password', action.password)
                .set('login', action.login);
        case 'SAVE_COUPLE' :
            return state.set('couple', item(state.get('couple'), action));
    }

    return state;
}

function item(state = immutable.List(), action) {
    if (!action) {
        return state;
    }

    if(action.type === 'SAVE_COUPLE') {
        return state.push(immutable.Map({
            'voucherNumber': action.voucherNumber,
            'trackingNumber': action.trackingNumber
        }));
    }

    return state;
}


export default data ;
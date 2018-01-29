import React from 'react';
import FormApiConnectContainer from './container/form_api_connect'
import FormApiVoucherNumberContainer from './container/form_api_sender'


class App extends React.Component {
    render() {
        return <div>
            <FormApiConnectContainer />
            <FormApiVoucherNumberContainer />
        </div>
    }
}

export default App;
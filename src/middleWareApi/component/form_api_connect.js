import React from 'react';
class FormApiConnect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'sylius@example.com',
            password: 'sylius'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, type) {
        this.setState({[type]: event.target.value});
    }

    handleSubmit(event) {
// console.log(this.state)
        // alert('An essay was submitted: ' + this.state.login + '-' + this.state.password);
        event.preventDefault();
        this.props.onSubmit(this.state.login, this.state.password);
    }

    render() {

        if(!this.props.show) {
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Login:
                    <input type="text" value={this.state.login} onChange={(e) => { this.handleChange(e, 'login') }} />
                </label>
                <br />
                <label>
                    Mdp:
                    <input type="password"  value={this.state.password} onChange={(e) => { this.handleChange(e, 'password') }}  />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormApiConnect;
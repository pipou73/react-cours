import React from 'react';
class FormApiSender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voucherNumber: '',
            trackingNumber: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, type) {
        this.setState({[type]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.voucherNumber, this.state.trackingNumber);
    }

    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    voucherNumber:
                    <input type="text" value={this.state.voucherNumber} onChange={(e) => { this.handleChange(e, 'voucherNumber') }} />
                </label>
                <br />
                <label>
                    trackingNumber:
                    <input type="text"  value={this.state.trackingNumber} onChange={(e) => { this.handleChange(e, 'trackingNumber') }}  />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormApiSender;
import React from 'react';


class Color extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="block" style={{backgroundColor: this.props.color}} onClick={(e) => this.props.click(this.props.color)}></div>
    }
}
export default Color

import React from 'react';


class Item extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="items" >
            <div className="item" style={{backgroundColor: this.props.color}} onClick={(e) => this.props.select(this.props.label)}>
                <label>{this.props.label}</label>
            </div>
            {this.props.children}
        </div>
    }
}
export default Item

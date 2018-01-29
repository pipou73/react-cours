import React from 'react';


class Page extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="page" dangerouslySetInnerHTML={{__html: this.props.body}} ></div>
    }
}
export default Page

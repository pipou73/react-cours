import React from 'react';
import {connect} from 'react-redux'
import LinkFooter from './linkFooter'

const mapDispatchFooter = function (dispatch, ownProps) {
    return {
        onLinkClick: () => dispatch({
            type: 'VISIBILITY_FILTER',
            visibilityFilter : ownProps.filter,
        })
    };
}

let LinkFooterContainer = connect(null, mapDispatchFooter)(LinkFooter);


function Footer({}) {
    return <div>
        Show: {' '}
        <LinkFooterContainer filter="ALL">All</LinkFooterContainer>
        {' '}
        <LinkFooterContainer filter="COMPLETED">Completed</LinkFooterContainer>
        {' '}
        <LinkFooterContainer filter="UNCOMPLETED">En cours</LinkFooterContainer>
    </div>
}


export default Footer;
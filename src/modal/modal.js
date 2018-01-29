import React from 'react';
function  Modal ({content, visible}) {
    return visible && <div className="content" >{content}</div>;
}

export default Modal;
import React from 'react';
function LinkFooter ({onLinkClick, children}) {
    return <a href="#" onClick={onLinkClick}>{children}</a>;
}

export default LinkFooter ;
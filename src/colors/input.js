import React from 'react';
function Input  ({msg, change}) {
    return <div ><input type="text" value={msg} onChange={(e) => change(e.target.value)} /></div>
}

export default Input ;
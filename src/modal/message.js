import React from 'react';
function Msg  ({msg, change}) {
    return <div ><input type="text" value={msg} onChange={(e) => change(e.target.value)} /></div>
}

export default Msg ;
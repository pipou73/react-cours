import React from 'react';
function Toogle  ({msg, click}) {
    return <div ><input type="submit" value={msg} onClick={click} /></div>
}

export default Toogle ;
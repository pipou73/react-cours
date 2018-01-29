import React from 'react';
function Post  ({title, body}) {
    return <div>
        <strong>{title}</strong><br/>
        <div>{body}</div>
    </div>
}

export default Post ;
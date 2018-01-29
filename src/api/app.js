import React from 'react';
import Post from './post'
import Color from './color'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.uri = 'https://jsonplaceholder.typicode.com/posts';
        this.state = { data : [] };
    }

    componentDidMount() {
        this.fetchPosts().then(response => {
            this.setState({
                data: response
            });
        });
    }

    fetchPosts() {
        return fetch(this.uri, {
            method: 'get'
        }).then(response => response.json())
    }

    render() {
        return <div>
            {this.state.data.map(({id, title, body}) =>
                <Color key={id}>
                    <Post title={title} body={body} />
                </Color>
            )}
        </div>
    }
}
export default App ;

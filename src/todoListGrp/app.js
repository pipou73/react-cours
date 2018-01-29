import React from 'react';
import AddTodoContainer from './addTodoContainer'
import AddTodoGrpContainer from './addTodoGrpContainer'
import TodoGrpListContainer from './todoGrpListContainer'
import TodoListContainer from './todoListContainer'

class App extends React.Component {
    render() {
        return <div>
            <AddTodoGrpContainer />
            <TodoGrpListContainer />
            <AddTodoContainer />
            <TodoListContainer />
        </div>
    }
}

export default App;
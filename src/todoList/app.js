import React from 'react';
import AddTodo from './addTodo'
import TodoList from './todoList'
import Footer from './footer'

// const App = () => (
//     <div>
//         <AddTodo />
//         <TodoList />
//         <Footer />
//     </div>
// )

class App extends React.Component {
    render() {
        return <div>
            <AddTodo />
            <TodoList title="TodoList" />
            <Footer />
        </div>;
    }
}
export default App ;

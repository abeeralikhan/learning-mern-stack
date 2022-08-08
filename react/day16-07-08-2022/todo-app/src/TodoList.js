import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        // todos: an array of todo objects
        this.state = { todos: [] };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    /** adds a new todo object in the existing array of todos */
    addTodo(todo) {
        // giving a unique id attribute to do the sent from the NewTodoForm component
        // isEditing: When user edits a todo, isEditing will become false
        const newTodo = { ...todo, id: uuid(), isEditing: false };

        // replacing the existing todo array with the updated one
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    /** removes an existing todo from the todos array */
    removeTodo(id) {
        // creating a new array of todo by filtering out the to be removed one
        const updatedTodos = this.state.todos.filter(todo => todo.id !== id);

        // replacing the existing array with the updated one
        this.setState({ todos: updatedTodos });
    }

    /** toggles the isEditing property of the todo to be either true or false */
    // newEditState: by default it's set to true, but this function can be reused to set it back to false
    enableEdit(id, newEditState=true) {
        // creating a copy of the exisitng todos array
        const updatedTodos = this.state.todos;

        // looping through the todos array
        for( let todo of updatedTodos) {
            if ( todo.id === id ) {

                // setting the new isEditing state of the todo using id
                todo.isEditing = newEditState;
            }
        }

        this.setState({ todos: updatedTodos });
    }

    /** updates the taskName of an exisitng todo in the todo array using its id */
    updateTodo(id, newTaskName) {
        // creating a copy of the exisitng todos array
        const updatedTodos = this.state.todos;

        // looping through the todos array
        for( let todo of updatedTodos) {
            if ( todo.id === id ) {
                todo.taskName = newTaskName;
                break;
            }
        }

        // setting the isEditing state of the todo back to false
        this.enableEdit(id, false);

        this.setState({ todos: updatedTodos });
    }

    /** returns an array of Todo components generated from the todos array */
    generateTodos() {
        return this.state.todos.map(todo => {
            let id = todo.id;
            return <Todo key={ id } id={ id } taskName={ todo.taskName } isEditing={ todo.isEditing } removeTodoFn={ this.removeTodo } enableEditFn={ this.enableEdit } updateTodoFn={ this.updateTodo }/>;
        });
    }

    render() {
        return (
            <div className='TodoList'>
                <h1>Todo List</h1>
                <NewTodoForm addTodoFn = { this.addTodo }/>
                { this.generateTodos() }
            </div>
        );
    }
}

export default TodoList;
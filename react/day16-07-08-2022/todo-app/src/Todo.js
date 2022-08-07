import { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { newTaskName: '' };
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        this.handleEnableEdit = this.handleEnableEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /** executes the parent removeTodo() function by passing the todo id */
    handleRemoveTodo() {
        // executing the parent removeTodo() function received in the props
        // by passing the id of the task to be removed
        this.props.removeTodoFn(this.props.id);
    }

    handleEnableEdit() {
        this.props.enableEditFn(this.props.id);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        alert('A todo wants to be updated!')
        console.log(this.state);
        //this.props.updateTodoFn(id, this.state.newTaskName);
    }

    displayTodo() {
        return (
            <div>
                <span>{ this.props.taskName }</span>
                <button onClick={ this.handleRemoveTodo }> X </button>
                <button onClick={ this.handleEnableEdit }> Edit </button>
            </div>
        );
    }

    displayForm() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input name="newTaskName" value={ this.state.newTaskName } placeholder={ this.props.taskName } onChange={ this.handleChange }/>
                <button> Save </button>
            </form>
        );
    }

    render() {
        return (
            <div className='Todo'>
                { this.props.isEditing ? 
                this.displayForm(): this.displayTodo()}
            </div>
        );
    }
}

export default Todo;
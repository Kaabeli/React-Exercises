import React, { Component } from 'react'
import ToDoList from './ToDoList';

export default class ToDoMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            description: '',
            date: ''
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            description: this.state.description,
            date: this.state.date
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    deleteTodo = (index) => {
        const todo = this.state.todos.filter((todo, i) => i !== index)
        this.setState({
            todos: todo
        })
    } 

  render() {
    return (
        <div className="container">
            <h2>Simple Todolist</h2>
        <div>
            <form onSubmit={this.addTodo}>
                Description:<br />
                <input type="text" name="description" onChange={this.inputHandler} value={this.state.description} /><br />
                Date:<br />
                <input type="date" name="date" onChange={this.inputHandler} value={this.state.date} />
                <br />
                <input className="btn btn-success btn-sm" type="submit" value="Add Todo" />
            </form>
        </div>
        <div>
                <ToDoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>  
        </div>
    )
  }
}

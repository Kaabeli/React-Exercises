import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './ToDoList';

class ToDo extends Component {

  // Constructori
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: []
    };
  }
// newTodoChanged kutsutaan, kun formin inputin eventti muuttuu ottaen annetun arvon
  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    })
  }
// Lähettää ns. tiedot eteenpäin muodostaen Todolle titlen ja mm. done -arvon (true/false)
  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }
// Aktivoituu, kun jonkun todon checkboxia klikataan
  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // Kopioi Arrayn
    todos[index] = {...todos[index]}; // Kopioi Todo
    todos[index].done = event.target.checked; // Päivittää done arvon kopioituun todoon
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // Kopio Arrayn (jälleen)
    todos.splice(index, 1); // Splicellä muokataan arrayn sisältöä, joko poistamalla tai vaihtamalla
    this.setState({
      todos
    });
  }
// Map käyttöön ja luo uuden arrayn ja muuttaa done arvon -> TRUE
  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div>
        <NewTodoForm 
        newTodo={this.state.newTodo}
        formSubmitted={this.formSubmitted.bind(this)} 
        newTodoChanged={this.newTodoChanged.bind(this)} />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
        todos={this.state.todos}
        toggleTodoDone={this.toggleTodoDone.bind(this)}
        removeTodo={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default ToDo;

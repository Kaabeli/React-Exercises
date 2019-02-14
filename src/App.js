import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HelloComponent from './components/HelloComponent';
import Counter from './components/Counter';
import WeatherComponent from './components/WeatherComponent';
import GitComponent from './components/GitComponent';
import ToDo from './components/ToDoList/ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Superduper React Exercises
        </header>
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-light bg-light">
            <Link to="/HelloComponent">Hello Component</Link>
            <Link to="/Counter">Simple Counter</Link>
            <Link to="/WeatherComponent">Weather Component</Link>
            <Link to="/GitComponent">Git Repo Search</Link>
            <Link to="/TodoList">TodoList</Link>
            </nav>
            <Route exact path="/" />
            <Route path="/HelloComponent" component={HelloComponent} />
            <Route path="/Counter" component={Counter} />
            <Route path="/WeatherComponent" component={WeatherComponent} />
            <Route path="/GitComponent" component={GitComponent} />
            <Route path="/TodoList" component={ToDo} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

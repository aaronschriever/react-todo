import React, { Component } from 'react';
import TodoListContainer from './TodoListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
     <TodoListContainer/>
      </div>
    );
  }
}

export default App;

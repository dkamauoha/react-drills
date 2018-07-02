import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './components/Todo';

class App extends Component {
  constructor () {
    super();
    this.state = {
      tasks: [],
      task: ''
    }
    this.addToTasks = this.addToTasks.bind(this);
  }

  handleChange (val) {
    this.setState({task: val})
  }

  addToTasks() {
    // let arr = [...this.state.tasks];
    // arr.push(this.state.task)
    // this.setState({tasks: arr})
    this.setState({tasks: [...this.state.tasks, this.state.task], task: ''})
    
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>My to-do-list:</h1>
        <input onChange={(e) => this.handleChange(e.target.value)} type="text"/>
        <button onClick={() => this.addToTasks()}>Add</button>
        <Todo tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;

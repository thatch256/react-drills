import React, { Component } from "react";
import "./App.css";
import Todo from './Components/Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      task: ''
    }
    this.addTask = this.addTask.bind(this)
  }
  
  updateTask(value) {
    this.setState({task: value})
  }

  addTask() {
   this.setState({
     list: [...this.state.list, this.state.task],
     task: ''
    })
   
  }

  render() {
    let list = this.state.list.map((e, i) => {
      return <Todo key={i} input={e} />
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
        <input value={this.state.task} placeholder='Enter new task' onChange={e => this.updateTask(e.target.value)} />
        <button onClick={this.addTask}>Add</button>
      </div>

      <br />
      {list}
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      }
    })
  }

  render() {
    const { task, tasks } = this.state

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter Task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
            />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    )
  }
}

export default App;

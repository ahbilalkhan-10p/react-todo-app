import React, { Component } from 'react';
import styles from './App.css';
import TodoColumn from './components/TodoColumn/TodoColumn';
import InProgressColumn from './components/InProgressColumn/InProgressColumn';
import DoneColumn from './components/DoneColumn/DoneColumn';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  addTask = (title, description) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newTask = {
      id,
      title,
      description,
      time: 0,
      status: 'todo',
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  deleteTask = (id) => {
    const filteredTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: filteredTasks,
    });
  };

  updateTaskStatus = (id, status) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.status = status;
        task.time += 1;
      }
      return task;
    });
    this.setState({
      tasks: updatedTasks,
    });
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Todo Application</h1>
    </header>
    <div className="column">
      <TodoColumn
    tasks={this.state.tasks}
    addTask={this.addTask}
    deleteTask={this.deleteTask}
    updateTaskStatus={this.updateTaskStatus}
    />
    <InProgressColumn
    tasks={this.state.tasks}
    deleteTask={this.deleteTask}
    updateTaskStatus={this.updateTaskStatus}
    />
    <DoneColumn tasks={this.state.tasks} />
    </div>
    </div>
  );
  }
}

export default App;

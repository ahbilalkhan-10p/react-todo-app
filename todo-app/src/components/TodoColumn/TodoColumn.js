import React from 'react';
import styles from './styles.module.scss';

const TodoColumn = ({ tasks, addTask, deleteTask, updateTaskStatus }) => {
  const handleAddTask = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    addTask(title, description);
    event.target.reset();
  };

  return (
    <div className={styles.column}>
      <h2>Todo</h2>
      {tasks
        .filter((task) => task.status === 'todo')
        .map((task) => (
          <div key={task.id} className={styles.task}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Time spent: {task.time}</p>
            <button onClick={() => updateTaskStatus(task.id, 'in progress')}>
              Next
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      <form className={styles.form} onSubmit={handleAddTask}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" required />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default TodoColumn;

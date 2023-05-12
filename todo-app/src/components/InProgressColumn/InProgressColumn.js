import React from 'react';

import styles from './styles.module.scss';

const InProgressColumn = ({ tasks, deleteTask, updateTaskStatus }) => {
  return (
    <div className={styles.column}>
      <h2>In Progress</h2>
      {tasks
        .filter((task) => task.status === 'in progress')
        .map((task) => (
          <div key={task.id} className={styles.task}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Time spent: {task.time}</p>
            <button onClick={() => updateTaskStatus(task.id, 'done')}>
              Next
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default InProgressColumn;

import React from 'react';

import styles from './styles.module.scss';

const DoneColumn = ({ tasks }) => {
  return (
    <div className={styles.column}>
      <h2>Done</h2>
      {tasks
        .filter((task) => task.status === 'done')
        .map((task) => (
          <div key={task.id} className={styles.task}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Time spent: {task.time}</p>
          </div>
        ))}
    </div>
  );
};

export default DoneColumn;

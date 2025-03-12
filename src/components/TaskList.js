import React, {useState} from 'react';
import TaskItem from './TaskItem';

// TaskList Component
const TaskList = ({ tasks, markComplete }) => {
  return (
    <table className='task-table'>
      <thead>
        <tr>
          <th style={{ width: '75%' }}>Task</th>
          <th style={{ width: '25%' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            markComplete={() => markComplete(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
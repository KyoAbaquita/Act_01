import React, { useState } from 'react';

// TaskItem Component
const TaskItem = ({ task, markComplete }) => {
  return (
    <tr className={`task-item ${task.completed ? 'completed' : ''}`}>
      <td style={{ width: '75vw', border: '1px solid black', backgroundColor: task.completed ? '#d4edda ' : 'transparent'}}>{task.text}</td>
      <td style={{ width: '25vw', textAlign: 'center'}}>{!task.completed && (
        <button onClick={markComplete}>Complete</button>
      )}</td>
    </tr>
  );
};

export default TaskItem;
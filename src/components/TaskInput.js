import React, { useState } from 'react';

// TaskInput Component
const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask(''); // Clear input field after adding task
    }
  };

  return (
    <div className='task-input'>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter a task'
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
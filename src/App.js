import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

// App Component
const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const markComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='app'>
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} markComplete={markComplete} />
    </div>
  );
};

export default App;
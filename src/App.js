import React, { useState } from 'react';
import './App.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

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





// import React, { useState } from 'react';
// import './App.css';

// // TaskInput Component
// const TaskInput = ({ addTask }) => {
//   const [task, setTask] = useState('');

//   const handleAddTask = () => {
//     if (task.trim() !== '') {
//       addTask(task);
//       setTask(''); // Clear input field after adding task
//     }
//   };

//   return (
//     <div className='task-input'>
//       <input
//         type='text'
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder='Enter a task'
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//     </div>
//   );
// };

// // TaskItem Component
// const TaskItem = ({ task, markComplete }) => {
//   return (
//     <tr className={`task-item ${task.completed ? 'completed' : ''}`} style={{ backgroundColor: task.completed ? 'lightgreen' : 'transparent' }}>
//       <td style={{ width: '75%', border: '1px solid black'}}>{task.text}</td>
//       <td style={{ width: '25%', textAlign: 'center'}}>{!task.completed && (
//         <button onClick={markComplete}>Complete</button>
//       )}</td>
//     </tr>
//   );
// };

// // TaskList Component
// const TaskList = ({ tasks, markComplete }) => {
//   return (
//     <table className='task-table'>
//       <thead>
//         <tr>
//           <th style={{ width: '75%' }}>Task</th>
//           <th style={{ width: '25%' }}>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tasks.map((task, index) => (
//           <TaskItem
//             key={index}
//             task={task}
//             markComplete={() => markComplete(index)}
//           />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// // App Component
// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (taskText) => {
//     const newTask = { text: taskText, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//   const markComplete = (index) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? { ...task, completed: true } : task
//     );
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className='app'>
//       <h1>To-Do List</h1>
//       <TaskInput addTask={addTask} />
//       <TaskList tasks={tasks} markComplete={markComplete} />
//     </div>
//   );
// };

// export default App;

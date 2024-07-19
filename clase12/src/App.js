// src/App.js
import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Lista de Tareas</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;


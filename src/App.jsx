import { useState, useEffect } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';
import Task from './Task';

const clearTasks = () => {
  setTasks([]);
};


const App = () => {
 
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks
      ? JSON.parse(storedTasks)
      : [
          { id: 1, text: 'Hacer la compra', completed: false },
          { id: 2, text: 'Llamar al médico', completed: true },
          { id: 3, text: 'Hacer ejercicio', completed: false }
        ];
  });

 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <h2>Tareas pendientes: {tasks.filter(task => !task.completed).length}</h2>

      <AddTaskForm addTask={addTask} />
      <button onClick={clearTasks} style={{ marginBottom: '1rem' }}>
  
</button>

      <ul>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </>
  );
};

export default App;


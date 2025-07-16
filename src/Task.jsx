const Task = ({ id, text, completed, deleteTask, toggleTaskCompletion }) => {
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer' }}
      onClick={() => toggleTaskCompletion(id)}
    >
      {text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(id);
        }}
        style={{ marginLeft: '10px', color: 'red' }}
      >
        
      </button>
    </li>
  );
};

export default Task;

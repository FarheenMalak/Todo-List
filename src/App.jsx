import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(''); 
  const [todoList, setTodoList] = useState([]); 

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodoList([...todoList, todo]);
      setTodo(''); 
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={todo}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        className="todo-input"
      />
      <button onClick={addTodo} className="add-button">Add Task</button>

      <ul className="todo-list">
        {todoList.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


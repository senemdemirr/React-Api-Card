import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../style.css';

function Todos() {
  const [todos , setTodos] = useState([]);
    
  
  useEffect(() =>{
     axios.get("https://jsonplaceholder.typicode.com/todos")
     .then(res => setTodos(res.data))
    },[]);
  return (
    <div className="body">
     {todos.map(todo => (
      <li className="container">
      <div key={todo.id}>
        <p>{todo.id}</p>
        <h3>{todo.title}</h3>
      </div>
    </li>
     ))}
    </div>
  )
}

export default Todos;

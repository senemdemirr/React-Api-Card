import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../style.css';
import ReactLoading from 'react-loading';


function Todos() {
  const [todos , setTodos] = useState([]);
  const [isLoading , setLoading] = useState(true);
    
  
  useEffect(() =>{
     axios.get("https://jsonplaceholder.typicode.com/todos")
     .then(res => setTodos(res.data))
     setLoading(false);

    },[]);
  return (
    <div className="body">
      {isLoading ? <ReactLoading className='loading' type={'spin'} color={'#7C3E66'} height={'10%'} width={'10%'} /> :  
      <div>
     {todos.map(todo => (
      <li className="container">
      <div key={todo.id}>
        <p>{todo.id}</p>
        <h3>{todo.title}</h3>
      </div>
    </li>
     ))}
     </div>
}
    </div>
  )
}

export default Todos;

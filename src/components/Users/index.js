import {useEffect, useState} from 'react'
import '../../style.css';


function Users() {

  const [users , setUsers] =useState(false);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      return res.json();
    })
    .then(data => setUsers(data))
    .catch(err => console.log(err));
  },[])
  return (
    <div className="body">
      {users && users.map(user => (
        <li className="container">
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
        </li>
      ))}
    </div>
  )
}

export default Users
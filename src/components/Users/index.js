import {useEffect, useState} from 'react'
import style from './style.module.css';


function Users() {

  const [users , setUsers] =useState(false);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      if(res.ok && res.status === 200){
        return res.json();
      }
    })
    .then(data => setUsers(data))
    .catch(err => console.log(err));
  })
  return (
    <div className={style.body}>
      {users && users.map(user => (
        <li className={style.container}>
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
        </li>
      ))}
    </div>
    // <ul>
    //   {users && users.map(user => (
    //     <li key={user.id}>
    //       {user.name}
    //     </li>
    //   ))}
    // </ul>
  )
}

export default Users
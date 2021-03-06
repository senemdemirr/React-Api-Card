import {useEffect, useState} from 'react'
import '../../style.css';
import ReactLoading from 'react-loading';


function Users() {

  const [users , setUsers] =useState(false);
  const [isLoading , setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      return res.json();
    })
    .then(data => setUsers(data))
    .catch(err => console.log(err))},500);

    setTimeout(() => {
      setLoading(false)
    },500)

  },[])
  return (
    <div className="body">
      {isLoading ? <ReactLoading className='loading' type={'spin'} color={'#7C3E66'} height={'10%'} width={'10%'} /> :  
      <div>
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
}
    </div>
  )
}

export default Users
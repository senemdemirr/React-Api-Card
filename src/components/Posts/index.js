import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from './style.module.css';
import ReactLoading from 'react-loading';


function Posts() {
  const [posts , setPosts] = useState([]);
  const [isLoading , setLoading] = useState(true);
  
  useEffect(() =>{
     setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
     .then(res => setPosts(res.data))
     },500)
     
     setTimeout(() => {
      setLoading(false)
     },500)
    },[]);
  return (
    <div className={style.body}>
      {isLoading ? <ReactLoading className={style.loading} type={'spin'} color={'#7C3E66'} height={'10%'} width={'10%'} /> :  
      <div>
      {posts && posts.map(post => (
        <li className={style.container}>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </li>
      ))}
      </div>
}
    </div>
  )
}

export default Posts;

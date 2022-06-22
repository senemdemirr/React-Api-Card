import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from './style.module.css';


function Posts() {
  const [posts , setPosts] = useState([]);
    
  
  useEffect(() =>{
     axios.get("https://jsonplaceholder.typicode.com/posts")
     .then(res => setPosts(res.data))
    },[]);
  return (
    <div className={style.body}>
      {posts && posts.map(post => (
        <li className={style.container}>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </li>
      ))}
    </div>
  )
}

export default Posts

import React, { useEffect, useState } from 'react'
import style from './style.module.css';

function Comments() {
    const [comments , setComments] = useState(false);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            return res.json();
        })
        .then(data => setComments(data))
        .catch(err => console.log(err));
    },[])
  return (
        <div className={style.body}>
            {comments && comments.map(comment => (
                <li  className={style.container}>
                    <div key={comment.id}>
                        <h2>{comment.name}</h2>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                </li>
            ))}
        </div>

  )
}

export default Comments
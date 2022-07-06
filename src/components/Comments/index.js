import React, { useEffect, useState } from 'react'
import style from './style.module.css';
import ReactLoading from 'react-loading';

function Comments() {
    const [comments , setComments] = useState(false);
    const [isLoading , setLoading] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            return res.json();
        })
        .then(data => setComments(data))
        .catch(err => console.log(err));
        setLoading(false);
    },[]);
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
            <div className={style.loading}>
                {isLoading ? (comments) : (
                    <ReactLoading  type={'spin'} color={'#7C3E66'} height={'10%'} width={'10%'} />
                )}
            </div>
        </div>

  )
}

export default Comments
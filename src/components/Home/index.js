import React from 'react'
import { Link } from 'react-router-dom';
import style from './style.module.css';

function Home() {
  return(
     <div className={style.home}>
        <Link className={style.card} to='/users'>For users click</Link>
        <Link className={style.card} to='/todos'>For todos click</Link>
        <Link className={style.card} to='/posts'>For posts click</Link>
        <Link className={style.card} to='/comments'>For comments click</Link>
    </div>
  )
}
export default Home;
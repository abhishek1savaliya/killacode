import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'


const blog = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    console.log("Use Effect is running ");
    fetch("http://localhost:3000/api/blogs").then((a)=>{
      return a.json();})
      .then((data)=>{
       console.log(data);
       setBlogs(data)
      })
  },[])



  return (
     <div className={styles.container}>
      <main className={styles.main}>

   {blogs.map((blogItem)=>{
      return <div key ={blogItem.title} className={styles.blogItem}>
        <Link href={`/blogpost/${blogItem.slug}`}>
        <h3>{blogItem.title}</h3></Link>
        <p>{blogItem.conetnt.slice(0,150)}</p>
      </div>
   })}

       </main>
    </div>
   
  )
}

export default blog

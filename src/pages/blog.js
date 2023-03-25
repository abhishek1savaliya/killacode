import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count,SetCount] = useState(2)

  const fetchData = async() => {
       let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`);
       SetCount(count+2)
       let data = await d.json();
       setBlogs(data)
  };

    return <div className={styles.container}>

      <main className={styles.main}>
      <h2 className={styles.h2}>All Blogs</h2>
      <InfiniteScroll
  dataLength={blogs.length}
  next={fetchData}
  hasMore={props.allCount !==blogs.length}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
{blogs.map((blogitem) => {
          return <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
            <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 300)}...</p>
            <Link href={`/blogpost/${blogitem.slug}`}>  <button className={styles.readmorebtn}>Read More</button></Link>
          </div>
      })}
</InfiniteScroll>

     
    </main>
  </div>
};


export async function getStaticProps(context) {
  let data = await fs.promises.readdir("Blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index <3; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('Blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  }
}

export default Blog;
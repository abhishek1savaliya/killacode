import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
    const router = useRouter();
     const {slug} = router.query;
  return (

    <div className={styles.container}>
          <main className={styles.main}>
    <h1>Title of the Page {slug}</h1>
    <hr />
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusantium ex, eligendi minus natus praesentium ipsam illum temporibus enim perferendis aspernatur similique deserunt optio soluta iure. Sit culpa praesentium assumenda quibusdam neque temporibus asperiores repellat nihil aliquid hic. Reprehenderit.</div>
    </main>
    </div>
    
  )
}

export default slug

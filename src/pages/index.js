import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {

  return (
    <div className={styles.container}>
    
         <style jsx> 
          {
      `h2{
        font-size:38px;
      }
      h3{
        font-size:28px;
      }
    }`
        }
 </style>
      <Head>
        <title>Kill Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      {/* <Script src='/sc.js' strategy="lazyOnload"></Script> */}
    
      <main className={styles.main}>
        <h1 className={styles.title}>
       <span className='myspan'>Kill a code</span> 
        </h1>   
        <div className={styles.imageWrap}>
        <Image className={styles.myImg}  alt='coder' src="https://thecodest.co/images/uploaded/bad-code-practices.png" width={237} height={158}/>
        {/* <img src="https://thecodest.co/images/uploaded/bad-code-practices.png" alt="coder" className={styles.myImg} width={237} height={158} /> */}
        </div>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>
      </main>
      <div >
        <h2 className={styles.h2}>Latest blog</h2>

        <div>
          <h2 className={styles.h3}>How to learn Javascript in 2023</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quo obcaecati eum laudantium placeat eligendi repudiandae doloremque dolore architecto ipsum?</p>
          <button className={styles.readmorebtn}>Read More</button>
        </div>
            
        <div>
          <h2 className={styles.h3}>How to learn Javascript in 2023</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus laborum pariatur ab illo eius magni eligendi, tenetur aspernatur adipisci?</p>
          <button className={styles.readmorebtn}>Read More</button>
        </div>
        <div>
          <h2 className={styles.h3}>How to learn Javascript in 2023</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam amet officiis saepe. Voluptate aut culpa magni enim unde. At, vero!</p>
          <button className={styles.readmorebtn}>Read More</button>
        </div>
      </div>
      
      <footer className={styles.footer}> </footer>
    </div>
  )
}


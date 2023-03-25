import React from 'react'
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.heading}> About Us</h1>
  
  <main className={styles.main}>
    <section className={styles.section}>
      <h2  className={styles.h2}>Who we are</h2>
      <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed elit et lectus eleifend suscipit ac sit amet diam. Sed finibus turpis et aliquam maximus. Morbi sit amet sem augue. Donec nec dolor fermentum, dictum arcu vel, consequat sapien. Quisque feugiat mi enim, a dapibus odio commodo non. Sed non erat in libero interdum elementum id eu augue. Ut sollicitudin, odio vitae pretium sagittis, nisl turpis bibendum ante, eget eleifend velit velit quis lorem. Etiam ultrices bibendum ipsum vel venenatis. Ut euismod nisi in dolor varius, vel suscipit urna mollis.</p>
    </section>
    
    <section className={styles.section}>
      <h2 className={styles.h2}>What we do</h2>
      <p className={styles.p}>Nullam lobortis, sapien a egestas facilisis, neque quam posuere est, non bibendum lacus velit non velit. Nunc sodales elementum sem vel aliquet. Nunc tincidunt blandit ligula eu tempus. Morbi tincidunt bibendum erat vel suscipit. Morbi euismod in ante in auctor. Integer sit amet nulla eget augue tincidunt tincidunt ac quis tortor. Nullam vitae diam eget mi euismod sagittis. Suspendisse finibus aliquam efficitur. Duis vehicula, magna vel consectetur eleifend, odio magna rhoncus ante, eu dictum odio justo a sem. Sed porttitor, sapien eget dignissim faucibus, turpis elit imperdiet elit, non laoreet ipsum massa eget ex.</p>
    </section>
    
    <section className={styles.section}>
      <h2 className={styles.h2}>Our Team</h2>
      <ul className={styles.ul}>
        <li className={styles.liceo}>Abhishek Savaliya - CEO</li>
        <li className={styles.li}>Jane Smith - COO</li>
        <li className={styles.li}>Mark Johnson - CMO</li>
      </ul>
    </section>
  </main>

    </div>
  )
}

export default about

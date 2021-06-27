import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import styles from "../styles/Home.module.css"
// import Image from 'next/image'
function Home() {
  return (
    <Fragment>
      <Head>
          <title>Mohammed | Next js Website</title>
      </Head>
    <div>
        <h1 className={styles.title}>Home</h1>
         <p className={styles.text}>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
           Laudantium placeat esse numquam quas eos assumenda quibusdam
         </p>
         <p className={styles.text}>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
           Laudantium placeat esse numquam quas eos assumenda quibusdam
         </p>
         <Link href="/users">
           <a className={styles.btn}>Users List</a>
          </Link>
    </div>
    </Fragment>
  )
}

export default Home;
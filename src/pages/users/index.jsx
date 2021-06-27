import Link from 'next/link'
import Head from "next/head"
import { Fragment } from 'react'
import styles from "../../styles/Users.module.css"

export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props : { users: data }
  }
}
const Blog = ({ users }) => {
    return (
    <Fragment>
    <Head>
        <title>Mohammed | Users Lists</title>
    </Head>
    <div className="card">
        <h1 align="center">All Users</h1>
        {users.map((user)=>(
            <Link key={user.id} href={"/users/" + user.id}>
              <a className={styles.single}><h1>{user.name}</h1></a>
            </Link>
        ))}
      </div>
      </Fragment>
     );
}
 
export default Blog;
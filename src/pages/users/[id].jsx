import Link from "next/link"

export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((user)=>{
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data = await res.json()

    return {
        props: { user: data }
    }
}

const Details = ({user}) => {
    return ( 
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <Link href="{user.website}"><a target="blank">{user.website}</a></Link>
        </div>
     );
}
 
export default Details;
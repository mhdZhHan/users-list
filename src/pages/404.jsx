import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";
const NotFound = () => {
    const router = useRouter()
    // Redirecting
    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1)  // prevtab
            router.push('/') // go to home
        }, 3000)
    }, []) // onMount useEffect

    return ( 
        <div className="not-found">
            <h1>Oooops....</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;
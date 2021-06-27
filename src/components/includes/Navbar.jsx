import Link from "next/link"
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href="/">
                    <a><Image src="/logo.svg" alt="logo" width={150} height={60}/></a>
                </Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/users"><a>Users Lists</a></Link>
        </nav>
     );
}
 
export default Navbar;
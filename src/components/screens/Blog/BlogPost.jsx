import Link from "next/link"
import Image from "next/image"
const BlogPost = ({blog}) => {
    return ( 
        <div className="blogPost">
            <div>
                {/* <Image src={`/${blog.img}`} alt="thubnail" width={200} height={200}/> */}
                {/* <img src={blog.img} alt="thumbnail" /> */}
                <div className="date">{blog.date}</div>
                <Link href={`/posts/${blog.slug}`}>
                    <a className="blogTitle">{blog.title}</a>
                </Link>
                <p>{blog.description}</p>
            </div>
        </div>
     );
}
 
export default BlogPost;
import Link from "next/link"
import Image from "next/image"
const BlogPost = ({blog}) => {
    return ( 
        <div className="blogPost">
            <div>
                <Image src={blog.img} alt="thubnail" width={500} height={400} responsive />
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
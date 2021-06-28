import matter from "gray-matter"
import BlogPost from "../../components/screens/Blog/BlogPost"

export const getStaticProps = async ()=>{
    const fs = require("fs")
    const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8')
    const blogs = files.filter(fn => fn.endsWith(".md"))
    const data = blogs.map(blog=>{
        const path = `${process.cwd()}/content/${blog}`
        const rawContent = fs.readFileSync(path, {
            encoding: "utf-8"
        })
        return rawContent
    })
    return {
        props: {
            data
        }
    }
}

const Blog = (props) => {
    const realData = props.data.map(blog=> matter(blog))
    const listItems = realData.map(listItem => listItem.data)
    return ( 
        <div id="blog-posts">
            <h1>Blog Posts</h1>
            <div className="container">
                <div className="card">
                    {listItems.map((blog, index)=>(
                        <BlogPost key={index} blog={blog}/>
                    ))}
                </div>
            </div>
        </div>
     )
}
 
export default Blog;
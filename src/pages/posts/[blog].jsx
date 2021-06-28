import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'

export const getServerSideProps  = async (context)=>{
    const fs = require('fs')
    const { blog } = context.params
    const content = fs.readFileSync(`${process.cwd()}/content/${blog}.md`, 'utf-8')
    return {
        props: {
            content,
        }
    }
}

const BlogPost = (props) => {
    const {data, content} = matter(props.content)
    return ( 
        <div id="blog-post-container">
            <div className="container">
                <h1>{data.title}</h1>
                <h3>{data.description}</h3>
                {/* <ReactMarkdown children={content}/> */}
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
     )
}

export default BlogPost
import {Link} from 'react-router-dom'

const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list grid grid-cols-3 py-4 gap-3">
            { blogs.map((blog) => (
                    <div className="blog-preview p-5 w-full
                        bg-yellow-100
                        rounded-2xl border-2 border-zinc-800" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                        <h2 className='text-2xl hover:underline'>{blog.title}</h2>
                        </Link>
                        <p className='text-xs pt-2 pb-5'>Written by {blog.author}</p>
                        <p className='max-w-prose line-clamp-3'>{blog.body}</p>
                        
                    </div>
                ))}
        </div>
     );
}
 
export default BlogList;
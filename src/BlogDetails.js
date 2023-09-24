import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.go(-1)
        })
    }

    return ( 
        <div className="blog-details p-5 mt-4 w-full bg-yellow-100
        rounded-2xl border-2 border-zinc-800">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className='text-xl'>{blog.title}</h2>
                    <p className='text-xs py-2'>Written by {blog.author}</p>
                    <div className='w-full'>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>
     );
}
 
export default BlogDetails;
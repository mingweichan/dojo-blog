import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        setIsLoading(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsLoading(false)
            history.push('/')
        })

        
    }
    return ( 
        <div className="create mt-4 w-1/3">
            <h2 className="text-xl">Add a new blog</h2>
            <form className= "my-4 flex flex-col" onSubmit={handleSubmit}>
                <label className="text-xs pb-2 pt-4">Title</label>
                <input 
                    className="focus:border-yellow-900 focus:outline-none focus:ring-0 rounded-md border-2 border-zinc-800 bg-yellow-100"
                    type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label className="text-xs pb-2 pt-4">Body</label>
                <textarea 
                    className="form-input focus:border-yellow-900 focus:outline-none focus:ring-0 rounded-md border-2 border-zinc-800 bg-yellow-100"
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label className="text-xs pb-2 pt-4">Author</label>
                <select
                    className="form-select focus:border-yellow-900 focus:outline-none focus:ring-0  rounded-md border-2 border-zinc-800 bg-yellow-100"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button className="text-yellow-100 bg-zinc-950 rounded-xl font-semibold p-2 w-max mt-4">Post</button>}
                {isLoading && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {    
    
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
            })
        console.log('use effect ran')
        }, [])

    return ( 
        <div className="home">
            {/* <BlogList blogs={blogs} title="My Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p> */}
        </div>     
     );
}
 
export default Home;
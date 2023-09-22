import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {    
    
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario')

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
        console.log('use effect ran')
        }, [])

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={blogs.title}/>}
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;
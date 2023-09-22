import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {    
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title={blogs.title}/>}
        </div>
     );
}
 
export default Home;
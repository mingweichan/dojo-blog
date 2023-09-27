import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar flex my-0 py-5 justify-between items-center">
            <Link to="/">
                <h1 className='text-3xl text-zinc-800 font-medium'>Ming thinks</h1>
            </Link>
            <div className="links">
                <Link to="/create" className="text-yellow-100 bg-zinc-950 rounded-xl font-semibold p-2">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
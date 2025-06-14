import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <h1>Spine Tracker</h1>
         <div>
             <Link to='/'>Home</Link>
             <Link to='/search'>Search</Link>
             <Link to='my-books'>My Books</Link>
             <Link to='/recommendations'>AI Recs</Link>
          </div>
        </nav>
    )
}

export default Navbar; 

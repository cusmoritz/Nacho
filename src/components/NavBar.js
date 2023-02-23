import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="container">
            <Link to="/"><button>All Posts</button></Link>
            <Link to="/create"><button>Create post</button></Link>
            {/* <button>Log In</button> */}
        </div>
    )
}

export default NavBar;
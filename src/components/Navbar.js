import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="link-provider">
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/about">About</NavLink>
                <NavLink className="navlink" to="/projects">Projects</NavLink>
                <NavLink className="navlink" to="/contact">Contact</NavLink>
            </div>
        </header>
    )
}
 
export default Navbar
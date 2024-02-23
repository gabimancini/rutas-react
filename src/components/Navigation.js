import { NavLink } from "react-router-dom";
export const Navigation=()=>{
    return(
        <header>
        <h1>DevMagister</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/tutorials">Tutorials</NavLink>
        </nav>
    </header>
    )
}
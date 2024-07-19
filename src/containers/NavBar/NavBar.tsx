import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="container">
                <NavLink to="/" className="navbar-brand mb-0 h1 text-light fw-bold">Netflix</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
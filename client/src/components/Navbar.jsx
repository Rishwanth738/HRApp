import React from "react";
import { Link, useNavigate} from "react-router-dom";
const Navbar = () =>{
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () =>{
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#eee" }}>
        <Link to="/">Home</Link>
        {token ? (
            <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/results">Results</Link>
            <button onClick={handleLogout}>Logout</button>
            </>
        ) : (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
        )}
        </nav>
    );
};

export default Navbar;
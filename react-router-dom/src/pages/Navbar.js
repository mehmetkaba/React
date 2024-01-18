import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger opacity-75 bg-gradient">
            <div className="container">
                <Link to="/" className="navbar-brand">Navbar <sup>1.00</sup></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto my-2">
                        <li className="nav-item me-3">
                            <Link to="home" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="posts" className="nav-link">Posts</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
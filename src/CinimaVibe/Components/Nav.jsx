import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav(){

    return(
      <div>
<nav className="navbar navbar-expand-lg bg-dark py-3 fixed-top shadow">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <i class="bi bi-camera-reels me-2"></i>
                    <span className="h4 mb-0">Cinima Vibe</span>
                    
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={() => setpageno(1)}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/price">Pricing</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
        <br></br>
        <br></br>
        <br></br>
       </div> 
    );
}
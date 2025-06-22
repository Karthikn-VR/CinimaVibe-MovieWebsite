import React, { useState } from "react";

export default function Navbar(){

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
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/price">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                    <div className="ms-auto d-flex">
                      <button
                        className="btn btn-outline-light ms-2 p-8"
                        type="button"
                        style={{ top: '75px' , right : '20px' }}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions"
                    >
                        Explore
                    </button>
                   </div> 
                </div>
            </div>
        </nav>
        <br></br>
        <br></br>
        <br></br>
       </div> 
    );
}
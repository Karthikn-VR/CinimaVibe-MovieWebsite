import React from 'react';
import image from '../assets/image.png'
import Nav from './Nav';

export default function AboutUs() {
  return (
    <div className="container-fluid py-5 bg-dark">
      <Nav />
      <div className="position-relative">
        <img
          src={image}
          alt="About Cinima Vibe"
          className="img-fluid w-100 rounded-3 shadow"
          style={{ maxHeight: '500px', objectFit: 'cover', filter: 'brightness(70%)' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-bold mb-3">About Cinima Vibe</h1>
          <p className="lead fw-normal">Your Ultimate Movie Destination</p>
        </div>
      </div>


      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 text-light fw-bold">Our Story</h2>
                <p className="lead text-muted mb-4">
                  Welcome to <strong>Cinima Vibe</strong> — the heartbeat of movie lovers worldwide! Whether you're thrilled by action-packed blockbusters, enchanted by heartwarming romances, spooked by chilling horror, or tickled by laugh-out-loud comedies, we’ve curated a cinematic experience just for you.
                </p>
                <p>
                  At Cinima Vibe, we’re more than just a platform — we’re a community passionate about the art of filmmaking. Our mission is to bring the magic of movies to your fingertips with detailed movie insights, trending trailers, genre-wise exploration, and personalized recommendations, all wrapped in a seamless, user-friendly experience.
                </p>
                <p>
                  Our team of movie enthusiasts works tirelessly to celebrate storytelling, stunning visuals, and the emotional journeys that define cinema. From classic gems to the latest releases, we’re here to help you discover your next favorite film.
                </p>
                <div className="text-center mt-5">
                  <p className="fw-bold fs-5 text-dark">
                    Join the vibe. Live the movie magic — only at Cinima Vibe!
                  </p>
                  <a href="/explore" className="btn btn-outline-light btn-lg rounded-pill px-4">
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10 text-center">
            <h2 className="mb-4 text-light fw-bold">Our Mission</h2>
            <p className="lead text-light mb-4">
              To inspire and connect movie lovers by providing a vibrant platform that celebrates the diversity and creativity of global cinema.
            </p>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-2 border-light shadow-sm">
                  <div className="card-body">
                    <i className="bi bi-film display-4 text-light mb-3"></i>
                    <h5 className="card-title fw-bold">Discover</h5>
                    <p className="card-text">Explore movies from every genre and era with ease.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-2 border-light shadow-sm">
                  <div className="card-body">
                    <i className="bi bi-star-fill display-4 text-light mb-3"></i>
                    <h5 className="card-title fw-bold">Personalize</h5>
                    <p className="card-text">Get tailored recommendations to match your taste.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-2 border-light shadow-sm">
                  <div className="card-body">
                    <i className="bi bi-people-fill display-4 text-light mb-3"></i>
                    <h5 className="card-title fw-bold">Connect</h5>
                    <p className="card-text">Join a community of passionate movie enthusiasts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
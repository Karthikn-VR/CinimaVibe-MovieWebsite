import React from 'react';
import Nav from './Nav';

export default function ContactUs() {
  return (
    <div className="container-fluid py-5 bg-dark">
      <Nav />
      <div className="text-center py-5 bg-dark border border-1 border-bottom-light text-white">
        <h1 className="display-4 fw-bold mb-3">Contact Cinima Vibe</h1>
        <p className="lead fw-normal">We'd love to hear from you! Get in touch with us for any questions or feedback.</p>
      </div>

      
      <div className="container py-5">
        <div className="row justify-content-center g-4">
         
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 text-light fw-bold">Send Us a Message</h2>
                <div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Name</label>
                    <input type="text" className="form-control rounded-3" id="name" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control rounded-3" id="email" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-bold">Subject</label>
                    <input type="text" className="form-control rounded-3" id="subject" placeholder="Subject" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-bold">Message</label>
                    <textarea className="form-control rounded-3" id="message" rows="5" placeholder="Your Message"></textarea>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-outline-light btn-lg rounded-pill px-4">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 text-light fw-bold">Get in Touch</h2>
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <i className="bi bi-geo-alt-fill text-light me-2"></i>
                    <span className="fw-bold">Address:</span><br />
                    123 Movie Lane, Cinematic City, CA 90210
                  </li>
                  <li className="mb-4">
                    <i className="bi bi-telephone-fill text-light me-2"></i>
                    <span className="fw-bold">Phone:</span><br />
                    <a href="tel:+1234567890" className="text-decoration-none text-light">+1 (234) 567-890</a>
                  </li>
                  <li className="mb-4">
                    <i className="bi bi-envelope-fill text-light me-2"></i>
                    <span className="fw-bold">Email:</span><br />
                    <a href="mailto:support@cinimavibe.com" className="text-decoration-none text-light">support@cinimavibe.com</a>
                  </li>
                  <li>
                    <i className="bi bi-clock-fill text-light me-2"></i>
                    <span className="fw-bold">Support Hours:</span><br />
                    Mon-Fri: 9 AM - 6 PM
                  </li>
                </ul>
                <div className="text-center mt-4">
                  <h5 className="fw-bold text-light">Follow Us</h5>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-light fs-4"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="text-light fs-4"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-light fs-4"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-light fs-4"><i className="bi bi-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 text-light fw-bold">Find Us</h2>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627927975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e3b3a4c4e0!2s123%20Movie%20Lane%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1635789211234!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    title="Cinima Vibe Location"
                    className="rounded-3"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
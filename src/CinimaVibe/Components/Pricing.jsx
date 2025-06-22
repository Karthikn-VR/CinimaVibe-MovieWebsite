import React from 'react';
import Nav from './Nav';

export default function Pricing() {
  return (
    <div className="container-fluid py-5 bg-dark">
        <Nav />
      
      <div className="text-center py-5 bg-dark text-white border border-1 border-bottom-light rounded-2 shadow-sm my-4">
        <h1 className="display-4 fw-bold mb-3">Pricing Plans</h1>
        <p className="lead fw-normal">Choose the perfect plan to unlock the full Cinima Vibe experience!</p>
      </div>

    
      <div className="container py-5">
        <div className="row justify-content-center g-4">
         
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border border-2 border-light shadow-lg rounded-4">
              <div className="card-body p-5 text-center">
                <h3 className="card-title fw-bold text-primary">Basic</h3>
                <p className="display-5 fw-bold mb-4">$0<span className="fs-6 text-muted">/month</span></p>
                <p className="text-muted mb-4">Perfect for casual movie fans to get started.</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Access to movie database</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Watch trailers</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Basic search functionality</li>
                  <li className="mb-2 text-muted"><i className="bi bi-x-circle-fill me-2"></i>Personalized recommendations</li>
                  <li className="mb-2 text-muted"><i className="bi bi-x-circle-fill me-2"></i>Ad-free experience</li>
                </ul>
                <button className="btn btn-outline-light btn-lg rounded-pill px-4">Get Started</button>
              </div>
            </div>
          </div>

         
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border border-2 border-light shadow-lg rounded-4 position-relative">
              <div className="position-absolute top-0 start-50 translate-middle-x">
                <span className="badge bg-success rounded-pill px-3 py-2">Most Popular</span>
              </div>
              <div className="card-body p-5 text-center">
                <h3 className="card-title fw-bold text-primary">Pro</h3>
                <p className="display-5 fw-bold mb-4">$9.99<span className="fs-6 text-muted">/month</span></p>
                <p className="text-muted mb-4">Ideal for movie enthusiasts seeking more features.</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Access to movie database</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Watch trailers</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Advanced search functionality</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Personalized recommendations</li>
                  <li className="mb-2 text-muted"><i className="bi bi-x-circle-fill me-2"></i>Ad-free experience</li>
                </ul>
                <button className="btn btn-outline-light btn-lg rounded-pill px-4">Choose Pro</button>
              </div>
            </div>
          </div>

         
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border border-2 border-light shadow-lg rounded-4">
              <div className="card-body p-5 text-center">
                <h3 className="card-title fw-bold text-primary">Premium</h3>
                <p className="display-5 fw-bold mb-4">$19.99<span className="fs-6 text-muted">/month</span></p>
                <p className="text-muted mb-4">The ultimate plan for true cinephiles.</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Access to movie database</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Watch trailers</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Advanced search functionality</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Personalized recommendations</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Ad-free experience</li>
                </ul>
                <button className="btn btn-outline-light btn-lg rounded-pill px-4">Choose Premium</button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <h2 className="text-center mb-4 text-light fw-bold">Frequently Asked Questions</h2>
            <div className="accordion" id="pricingFAQ">
              <div className="accordion-item border-0 shadow-sm rounded-3 mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                    aria-expanded="false"
                    aria-controls="faq1"
                  >
                    Can I cancel my subscription anytime?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                  <div className="accordion-body">
                    Yes, you can cancel your subscription at any time through your account settings. No strings attached!
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 shadow-sm rounded-3 mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                    aria-expanded="false"
                    aria-controls="faq2"
                  >
                    Is there a free trial available?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                  <div className="accordion-body">
                    We offer a 7-day free trial for our Pro and Premium plans. Try them out and experience the full Cinima Vibe magic!
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 shadow-sm rounded-3 mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                    aria-expanded="false"
                    aria-controls="faq3"
                  >
                    What payment methods are accepted?
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                  <div className="accordion-body">
                    We accept all major credit cards, PayPal, and select digital wallets for your convenience.
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
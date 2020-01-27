import React from 'react'

function Services() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase mt-5 mb-5" id="services">Services</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
              <i class="fas fa-user"></i>
              </span>
              <h4 className="service-heading">Headhunting</h4>
              <p className="text-muted">This is what we were born to do. Partner with us on a Contingent, Retained, or Confidential Search to execute your vision.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
              <i class="fas fa-briefcase"></i>
              </span>
              <h4 className="service-heading">Consulting</h4>
              <p className="text-muted">We pride ourselves on our collaborative and empathetic approach to recruitment. Consultation sessions allow us to delve deeper into your hiring needs.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
              <i class="fas fa-globe-americas"></i>
              </span>
              <h4 className="service-heading">Employer Branding</h4>
              <p className="text-muted">An excellent recruitment firm also retains and builds employee relationships. Let us elevate you in the eyes of the job market.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
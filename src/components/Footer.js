import React from 'react';

function Footer() {
  return (
<div className="text-left text-lg-start bg-dark text-muted">
  <section className="">
    <div className="container text-left text-md-start mt-5 p-3">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Meals</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Desserts</a>
          </p>
          <p>
            <a href="#!" className="text-reset">appetizers</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Fcebook</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Instagram</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Twitter</a>
          </p>

        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}

export default Footer;

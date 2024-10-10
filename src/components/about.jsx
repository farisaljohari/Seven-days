import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/about.jpg"
              className="img-responsive"
              alt="About us"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Seven Days Cleaning Services is committed to providing
                exceptional cleaning solutions tailored to fit your specific
                needs. Our professional team ensures your space is spotless,
                whether it’s your home, office, or commercial property. We take
                pride in delivering top-quality service with attention to detail
                and a personal touch, available every day of the week.
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Experienced and Professional Team</li>
                    <li>Customizable Cleaning Plans</li>
                    <li>Eco-friendly Cleaning Products</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Flexible Scheduling Options</li>
                    <li>Competitive Pricing</li>
                    <li>100% Satisfaction Guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

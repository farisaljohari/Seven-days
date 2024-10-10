import React from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Fantastic cleaning service! My house has never looked better.",
    },
    {
      name: "Jane Smith",
      text: "The team is punctual, friendly, and leaves everything spotless.",
    },
    {
      name: "Michael Johnson",
      text: "Highly recommend! They offer flexible schedules and great attention to detail.",
    },
    {
      name: "Emily Brown",
      text: "Professional and thorough. I’m always impressed by the results.",
    },
    {
      name: "David Wilson",
      text: "Great service and customer support. They truly care about their clients.",
    },
    {
      name: "Sarah White",
      text: "Seven Days Cleaning Services is reliable and does an excellent job every time.",
    },
  ];

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {testimonials.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image">
                  <img src="/img/no_profile_pic.png" alt="User icon" />
                </div>
                <div className="testimonial-content">
                  <p>"{d.text}"</p>
                  <div className="testimonial-meta"> - {d.name} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

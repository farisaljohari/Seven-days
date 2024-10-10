import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom,
  faHammer,
  faCouch,
  faHome,
  faBuilding,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  const servicesData = [
    {
      name: "Residential Cleaning",
      icon: <FontAwesomeIcon icon={faHome} />,
      text: "We provide thorough and reliable cleaning for your home, from regular upkeep to deep cleaning solutions.",
    },
    {
      name: "Commercial Cleaning",
      icon: <FontAwesomeIcon icon={faBuilding} />,
      text: "Our commercial cleaning services are designed to keep your workspace spotless and welcoming.",
    },
    {
      name: "Move-In/Move-Out Cleaning",
      icon: <FontAwesomeIcon icon={faTruck} />,
      text: "Leave the stress of moving to us. We ensure your space is clean before or after your move.",
    },
    {
      name: "Deep Cleaning",
      icon: <FontAwesomeIcon icon={faBroom} />,
      text: "Our deep cleaning service targets hard-to-reach areas, ensuring every corner of your home is pristine.",
    },
    {
      name: "Post-Construction Cleaning",
      icon: <FontAwesomeIcon icon={faHammer} />,
      text: "We handle the mess after construction or renovation, making sure your space is dust-free and ready to use.",
    },
    {
      name: "Carpet & Upholstery Cleaning",
      icon: <FontAwesomeIcon icon={faCouch} />,
      text: "Our specialized cleaning services for carpets and upholstery keep your furniture looking and smelling fresh.",
    },
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Discover our wide range of cleaning services tailored to meet your
            needs.
          </p>
        </div>
        <div className="row">
          {servicesData.slice(0, 3).map((service, index) => (
            <div key={`${service.name}-${index}`} className="col-md-4">
              <div className="icon-circle">{service.icon}</div>
              <div className="service-desc">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {servicesData.slice(3).map((service, index) => (
            <div key={`${service.name}-${index}`} className="col-md-4">
              <div className="icon-circle">{service.icon}</div>
              <div className="service-desc">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

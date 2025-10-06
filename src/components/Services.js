import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Web Application Development</h3>
            <p>Custom web apps tailored to your needs, from e-commerce to enterprise solutions.</p>
          </div>
          <div className="card">
            <h3>Software Development</h3>
            <p>Full-stack software solutions, including backend systems and integrations.</p>
          </div>
          <div className="card">
            <h3>API Integrations</h3>
            <p>Seamless integration with third-party services, including payment gateways like Mpesa, PayPal, Stripe, and many others.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

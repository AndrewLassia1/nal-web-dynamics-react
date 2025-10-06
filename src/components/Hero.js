import React from 'react';

const Hero = ({ scrollToContact }) => {
  return (
    <section id="hero">
      <div className="container">
        <h2>Transforming Ideas into Digital Solutions</h2>
        <p>We specialize in modern web applications and software development to drive your business forward.</p>
        <button onClick={scrollToContact} className="btn">Get in Touch</button>
      </div>
    </section>
  );
};

export default Hero;

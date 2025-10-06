import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';

import SoftwareTypes from './components/SoftwareTypes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s, transform 0.6s';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero scrollToContact={scrollToContact} />
      <Services />
      <WhyChooseUs />
      <SoftwareTypes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

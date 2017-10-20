import React from 'react';
import Header from '../atoms/Header'
import Footer from '../atoms/Footer'
import Button from '../atoms/Button'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <ul>
          <li>Stuff</li>
          <li>More stuff</li>
        </ul>
      </div>
      <Button text="Back" to="/" />
      <Footer />
    </div>
  );
}

export default AboutPage;

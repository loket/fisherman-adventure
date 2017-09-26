import React from 'react';
import Button from '../atoms/Button';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';

const StartPage = () => {
  return(
    <div>
      <Header />
      <div className="startpage">
        <Button text="Play Game" to="/Game" />
        <Button text="About Game" to="/About" />
        <Button text="Resources" to="/Resources" />
      </div>
      <Footer />
    </div>
  )
}

export default StartPage;

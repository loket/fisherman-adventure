import React from 'react';

import Button from '../atoms/button'
import Header from '../atoms/header'
import Footer from '../atoms/footer'

const StartPage = () => {
  return (
    <div>
      <Header />
      <div className="startpage">
        <Button text="Play game" to="/game" />
        <Button text="About game" to="/about" />
        <Button text="Resources" to="/resources" />
      </div>
      <Footer />
    </div>
  )
}

export default StartPage;

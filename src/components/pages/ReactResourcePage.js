import React from 'react';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import Button from '../atoms/Button';

const ReactResourcePage = () => {
  return(
      <div>
        <Header />
        <div className="content">
          <ul>
            <li><a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
            <li><a href="http://www.pluralsight.com " target="_blank" rel="noopener noreferrer">Pluralsight</a></li>
            <li><a href="http://www.lynda.com" target="_blank" rel="noopener noreferrer">Lynda.com</a></li>
            <li><a href="http://www.egghead.io" target="_blank" rel="noopener noreferrer">Egghead</a></li>
            <li><a href="https://reacttraining.com" target="_blank" rel="noopener noreferrer">React training</a></li>
            <li><a href="http://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux state management</a></li>
            <li><a href="js.coach/react" target="_blank" rel="noopener noreferrer">js coach</a></li>
            <li><a href="https://react.statuscode.com/" target="_blank" rel="noopener noreferrer">React statuscode</a></li>
          </ul>
        </div>
        <Button text="Back" to="/" />
        <Footer />
      </div>
  )
}

export default ReactResourcePage;

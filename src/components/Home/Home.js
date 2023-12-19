import React from 'react';
import './Home.css';

function Home({ goToNextQuestion }) { // Accept goToNextQuestion as a prop
  return (
    <div className = "home-container" onClick={goToNextQuestion}></div>
  );
}

export default Home;
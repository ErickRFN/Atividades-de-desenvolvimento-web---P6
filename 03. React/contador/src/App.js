import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive]);

  const toggleCounter = () => {
    if (isActive) {
      setCount(0);
    }

    setIsActive(!isActive);
  };

  return (
    <div className="counter-container">
      <h1>Contador</h1>

      <div className="counter-value">{count}</div>


      <button className="counter-button" onClick={toggleCounter}>
        {isActive ? 'Parar' : 'Iniciar'}
      </button>
    </div>
  );
}

export default App;

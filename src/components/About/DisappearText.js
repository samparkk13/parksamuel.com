import React, { useState, useEffect } from 'react';
import './About.css';

function DisappearingText() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="disappearing-text-container">
      {visible && <p className="disappearing-text">(yes its snowing)</p>}
    </div>
  );
}

export default DisappearingText;

import React, { useState, useEffect } from 'react';

function DisappearingText() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div style={styles.container}>
      {visible && <p style={styles.text}>(yes its snowing)</p>}
    </div>
  );
}

const styles = {
  container: {
    position: 'absolute',
    top: 100,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    zIndex: 1000, // Ensure it is on top of other elements
    overflow: "hidden" // Hide overflow to prevent scrolling
  },
  text: {
    fontSize: '1.0em',
    color: 'white',
    fontFamily: 'Impact, fantasy', // Apply the Google Font
  },
};

export default DisappearingText;
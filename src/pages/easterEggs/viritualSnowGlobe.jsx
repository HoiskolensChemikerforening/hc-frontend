import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Shake from 'shake.js';

// does not work properly:(( i can´t get the snow-animation correct

export const VirtualSnowGlobe = () => { 
  const [snowflakes, setSnowflakes] = useState([]);
  const [shaking, setShaking] = useState(false);

  const shakeGlobe = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      // Reset snowflake positions after the shake
      const resetSnowflakes = snowflakes.map(() => {
        return {
          left: `${Math.random() * 80 + 10}%`,
          top: '100%',
          animationDuration: `${Math.random() * 5 + 2}s`,
        };
      });
      setSnowflakes(resetSnowflakes);
    }, 4000); // Shake for 4 seconds
  };

  useEffect(() => {
    // Create random snowflakes at the bottom of the globe on mount
    const createSnowflake = () => {
      const left = `${Math.random() * 80 + 10}%`; // Limit left position to 10% - 90%
      const top = '100%'; // Start at the bottom of the globe
      const animationDuration = `${Math.random() * 5 + 2}s`; // Slower snowfall
      return { left, top, animationDuration };
    };

    const initialSnowflakes = Array.from({ length: 50 }, createSnowflake); // Increase the number of snowflakes
    setSnowflakes(initialSnowflakes);

    // Initialize Shake library
    const shakeEvent = new Shake({ threshold: 15 });
    shakeEvent.start();
    window.addEventListener('shake', shakeGlobe);

    // Cleanup on unmount
    return () => {
      shakeEvent.stop();
      window.removeEventListener('shake', shakeGlobe);
    };
  }, []);

  return (
    <Container>
      <SnowGlobe shaking={shaking} onClick={shakeGlobe}>
        <Glass />
        <Base />
        <Socket />
        {snowflakes.map((flake, index) => (
          <Snowflake
            key={index}
            style={{
              left: flake.left,
              top: flake.top,
              animationDuration: flake.animationDuration,
            }}
          />
        ))}
      </SnowGlobe>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  min-height: 90vh;
  background-color: lightblue; /* Light blue background */
`;

const shakeAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5px, -5px);
  }
  20% {
    transform: translate(5px, 5px);
  }
  30% {
    transform: translate(-5px, -5px);
  }
  40% {
    transform: translate(5px, 5px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  60% {
    transform: translate(5px, 5px);
  }
  70% {
    transform: translate(-5px, -5px);
  }
  80% {
    transform: translate(5px, 5px);
  }
  90% {
    transform: translate(-5px, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const SnowGlobe = styled.div`
  width: 400px; /* Increase the size of the snow globe */
  height: 400px; /* Increase the size of the snow globe */
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  ${({ shaking }) =>
    shaking &&
    `
    animation: ${shakeAnimation} 0.2s linear infinite; // Shake infinitely with smoother transition
  `}
`;

const Glass = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4); /* Darker glass */
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Base = styled.div`
  width: 160px; /* Adjust the base size */
  height: 40px; /* Adjust the base size */
  background-color: #282c34;
  position: absolute;
  bottom: 0;
  left: 120px; /* Adjust the base position */
  border-radius: 50% 50% 0 0;
`;

const Socket = styled.div`
  width: 20px; /* Adjust the socket size */
  height: 20px; /* Adjust the socket size */
  background-color: #282c34;
  position: absolute;
  bottom: -10px; /* Position it below the base */
  left: 190px; /* Adjust the socket position */
  border-radius: 50%;
`;

const Snowflake = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  animation: fall linear infinite;
  animation-duration: ${({ animationDuration }) => animationDuration}; // Apply custom animation duration
`;

export default VirtualSnowGlobe;

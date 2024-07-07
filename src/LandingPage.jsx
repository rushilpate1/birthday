// src/LandingPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Ensure this line imports your CSS file

const letters = 'HAPPY   BIRTHDAY   HANVI!!'.split('');

const getRandomPosition = () => {
  const left = Math.random() * 100;
  return {
    left: `${left}vw`,
  };
};

const getRandomColor = () => {
  const colors = ['#FF5733','#0096FF','#C70039', '#33FF57', '#3357FF', '#FF33A1', '#FF8F33', '#8D33FF', '#33FFF3'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const getRandomPath = () => {
  const controlPoint1X = Math.random() * 20 - 10;
  const controlPoint2X = Math.random() * 20 - 10;
  return `M 0 0 Q ${controlPoint1X} 50, ${controlPoint2X} 100`;
};

const getRandomSize = () => {
  const size = 40 + Math.random() * 20;
  return {
    width: `${size}px`,
    height: `${size * 1.4}px`,
  };
};

const LandingPage = () => {
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (started) {
      const timer = setTimeout(() => {
        document.querySelector('.scrapbook-button').style.opacity = 1;
        document.querySelector('.letter-button').style.opacity = 1;
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [started]);

  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleScrapbook = () => {
    navigate('/scrapbook');
  };

  const handleLetter = () => {
    navigate('/letter');
  };

  return (
    <div className={`landing-page ${started ? 'started' : ''}`}>
      <audio ref={audioRef} src="/song.mp3" loop />
      {!started && (
        <button onClick={handleStart} className="play-button">🎁</button>
      )}
      {started && (
        <>
          <div className="balloons">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="balloon-container"
                style={{ ...getRandomPosition(), '--balloon-color': getRandomColor(), ...getRandomSize() }}
                initial={{ y: '10vh' }}
                animate={{ 
                  y: '-100vh',
                  x: [null, -10, 10, -10, 10], // Left and right movement
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                  delay: i * 0.5, // This keeps the staggered effect and starts the balloons immediately
                }}
              >
                <div className="balloon"></div>
                <div className="string">
                  <svg viewBox="0 0 2 100">
                    <path d={getRandomPath()} />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="letters">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="letter"
                initial={{ y: '100vh' }}
                animate={{ y: '0vh' }}
                transition={{ type: 'spring', stiffness: 120, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <button 
            onClick={handleScrapbook} 
            className="scrapbook-button"
            style={{ opacity: 0, transition: 'opacity 1s' }}
          >
            Scrapbook
          </button>
          <button 
            onClick={handleLetter} 
            className="letter-button"
            style={{ opacity: 0, transition: 'opacity 1s' }}
          >
            Letter
          </button>
        </>
      )}
    </div>
  );
};

export default LandingPage;

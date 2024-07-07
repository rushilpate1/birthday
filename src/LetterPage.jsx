// src/LetterPage.jsx
import React, { useRef, useEffect } from 'react';
import './LetterPage.css'; // Add specific styles for the letter page here

const getRandomColor = () => {
  const colors = ['#FF5733','#0096FF','#C70039', '#33FF57', '#3357FF', '#FF33A1', '#FF8F33', '#8D33FF', '#33FFF3'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const shapes = new Array(15).fill(0).map(() => ({
  color: getRandomColor(),
  size: `${Math.random() * 100 + 50}px`,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`
}));

const LetterPage = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <div className="letter-page">
      <audio ref={audioRef} src="song3.mp3" loop />
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="shape"
          style={{
            backgroundColor: shape.color,
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left
          }}
        ></div>
      ))}
      <div className="letter-card">
        <h1 className="letter-title">A Letter to Hanvi</h1>
        <div className="letter-content">
          <p>Dear Honeyslut,</p>
          <p>HAPPY 19TH BIRTHDAY!! Ever since I've known you, you have been one of my favorite people. I love spending time with you, talking to you, and even just being near you. You're so perfect, pretty, and utterly amazing. You’re genuine perfection inside and out. Whether your eyebrows are done or not, hair washed or not, makeup on or none, you’re so beautiful. You’re funny and have such a good sense of humor. You are so passionate about the things you love, and you’re the most empathetic person I know. You’re the embodiment of perfection and, in my eyes, the definition of beauty.</p>
          <p>One minute on a call with you or even seeing you for a second makes my whole day. I'm addicted to you, Hanvitha Potluri. I'm actually obsessed with you, and I go feral and insane without you. This last year has had its ups and downs, but I wouldn’t have it any other way. I need you in my life, and I love that you’re right here with me every day. I want to keep growing with you for the next year and every year after, but for now, HAPPY BIRTHDAY, PRINCESS!</p>
          <p>YOURS,</p>
          <p>TUSHIL</p>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;

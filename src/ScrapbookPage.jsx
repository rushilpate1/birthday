import React, { useState, useEffect } from 'react';
import './ScrapbookPage.css';

const photos = [
  { src: '/public/IMG_4278.HEIC' },
  { src: '/public/IMG_4310.JPG' },
  { src: '/public/IMG_4397.heic' },
  { src: '/public/IMG_4398.heic' },
  { src: '/public/IMG_4400.HEIC' },
  { src: '/public/IMG_4515.JPG' },
  { src: '/public/IMG_4516.HEIC' },
  { src: '/public/IMG_4813.HEIC' },
  { src: '/public/IMG_6961 2.PNG' },
  { src: '/public/photo1.PNG' },
  { src: '/public/photo2.HEIC' },
];

const generatePositions = (count, maxWidth, maxHeight) => {
  const positions = [];
  while (positions.length < count) {
    const newPos = {
      x: Math.random() * (maxWidth - 10), // To avoid edges
      y: Math.random() * (maxHeight - 10), // To avoid edges and bottom
      size: Math.random() * 5 + 10, // Sizes between 10vw and 15vw
    };
    let overlapping = false;
    for (const pos of positions) {
      const distance = Math.sqrt(Math.pow(pos.x - newPos.x, 2) + Math.pow(pos.y - newPos.y, 2));
      if (distance < (pos.size + newPos.size) * 0.6) { // Check for overlap
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      positions.push(newPos);
    }
  }
  return positions;
};

const ScrapbookPage = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const newPositions = generatePositions(photos.length, 80, 70); // 80vw and 70vh to avoid edges
    setPositions(newPositions);

    // Play audio when component mounts
    const audio = new Audio('/public/song2.mp3');
    audio.play();
  }, []);

  return (
    <div className="gallery">
      {positions.length > 0 && photos.map((photo, index) => {
        const position = positions[index];
        return (
          <div
            key={index}
            className="photo"
            style={{
              width: `${position.size}vw`,
              height: `${position.size}vw`,
              top: `${position.y}vh`,
              left: `${position.x}vw`,
            }}
          >
            <img src={photo.src} alt={`Artwork ${index}`} />
          </div>
        );
      })}
    </div>
  );
};

export default ScrapbookPage;

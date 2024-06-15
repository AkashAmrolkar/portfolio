// src/Typewriter.js
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 300 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      // Reset after completing the text
      const timeoutId = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, displayedText, speed]);

  return (
    <div>
        <h2 className='ext-lg font-medium text-white text-3xl text-center'>A Passionate <span className='type-write text-center text-primary'> {displayedText}</span></h2>
    </div>
  );
};

export default Typewriter;

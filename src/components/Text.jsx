import { useState, useEffect } from 'react';

const Name = ({ text }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const wordList = text.split(' ');
    setWords(wordList);
  }, [text]);

  return (
    <h1>
      {words.map((word, index) => (
        <span
          key={index}
          style={{ animationDelay: `${index * 0.5}s` }}
          className="word-animation text"
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default Name;

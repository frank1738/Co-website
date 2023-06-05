import { useEffect, useState } from 'react';
import { useStateContext } from './context/ContextProvider';
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';
const Jokes = () => {
  const transition = { type: 'tween', duration: 2 };
  const [joke, setJoke] = useState('');
  const { fetchUrl, host, api_key } = useStateContext();
  useEffect(() => {
    const fetchJokes = async () => {
      const req = await fetch(fetchUrl, {
        params: {
          format: 'json',
          contains: 'C%23',
          idRange: '0-150',
          blacklistFlags: 'nsfw,racist',
        },
        headers: {
          'X-RapidAPI-Key': api_key,
          'X-RapidAPI-Host': host,
        },
      });
      const data = await req.json();
      console.log(data);
      setJoke(data);
    };
    try {
      return () => fetchJokes();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section className="jokes-section">
      <motion.div
        className="jokes-container"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={transition}
      >
        <div className="jokes-header">
          <h1>Laughing Bytes</h1>
          <span>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    ' Adding a Dose of Humor to Your Developer Journey'
                  )
                  .start();
              }}
            />
          </span>
        </div>

        {joke ? (
          <div className="jokes-div">
            <h2>Category: {joke.category}</h2>
            <div className="jokes-main">
              <p>{joke.setup}</p>
              <p>{joke.delivery}</p>
              <img
                src="https://media.giphy.com/media/7GibaLkhx4x6QPNZbV/giphy.gif"
                className="jokes-image"
                alt="GIF example"
              />
            </div>
          </div>
        ) : (
          <img
            src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
            alt="loading"
            className="loading"
          />
        )}

        <p className="jokes-decription">
          Welcome to Laughing Bytes, where we believe that a good laugh can make
          all the difference in your software development journey. As
          developers, we often find ourselves deep in lines of code and complex
          problem-solving, which can be both challenging and rewarding. However,
          it's essential to remember that taking a break and indulging in some
          lighthearted fun can do wonders for our well-being and productivity.
          That's why we've created this space to share random jokes that will
          bring a smile to your face and brighten your coding sessions. Whether
          you're tackling a bug, working on a new feature, or simply taking a
          breather, join us here at Laughing Bytes for a refreshing dose of
          humor. Let's embrace the power of laughter and create a work-life
          balance that sparks creativity, reduces stress levels, and reminds us
          to enjoy the journey one funny line of code at a time.
        </p>
      </motion.div>
    </section>
  );
};

export default Jokes;

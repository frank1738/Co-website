import { HistoryA, HistoryB, HistoryC, HistoryD, HistoryE } from './dammy';
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';

const AboutPage = () => {
  const transition = { type: 'tween', duration: 2 };
  return (
    <section className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={transition}
      >
        <div className="about-header">
          <h1>About Me</h1>
          <span>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter.typeString('Full-Stack Web Developer ').start();
              }}
            />
          </span>
        </div>
        <div className="about-description">
          <div className="blog first">
            <p>{HistoryA}</p>
            <p>{HistoryB}</p>
            <p>{HistoryC}</p>
          </div>
          <div className="blog ">
            <p>{HistoryD}</p>
            <p className="second">{HistoryE}</p>
            <p>
              <a
                href="https://docs.google.com/document/d/1KyvsUEsaCdz_1tAiiOhm1isbv1M0amu3QNBCyLdgw6Y/edit?usp=sharing"
                target="_blank"
                className="resume"
              >
                View Resume
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;

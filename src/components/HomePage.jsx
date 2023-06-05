import { motion } from 'framer-motion';
import frank from '../assets/frank.jpg';
import TypewriterComponent from 'typewriter-effect';
import Footer from './Footer';

const HomePage = () => {
  const transition = { type: 'tween', duration: 2 };
  return (
    <div className="home-div">
      <motion.div
        className="home-page"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={transition}
      >
        <div className="headline">
          <h1>
            <span>Hi, I'm</span>
            <span className="outline-text">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter.typeString('Frank,').start();
                }}
              />
            </span>
          </h1>
          <h2>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter.typeString('Full-Stack Web Developer ').start();
              }}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            I have the skills and experience to bring your vision to life.
            Whether you need a dynamic web application or a responsive mobile
            app, I can deliver high-quality, scalable solutions that meet your
            needs.
          </motion.p>
          <a href="mailto:franklineosoro08@gmail.com" className="contact-btn">
            Contact Me <i className="uil uil-envelope-download"></i>
          </a>
        </div>
        <div className="image-container">
          <div className="image-div">
            <motion.div
              className="border"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition}
            />
            <motion.div
              className="border-background"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition}
            />
            <motion.img
              src={frank}
              alt="frank"
              className="profile-image"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={transition}
            />
          </div>
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/frank1738/" target="_blank">
                <i className="uil uil-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/frankhiggins08" target="_blank">
                <i className="uil uil-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/frank1738" target="_blank">
                <i className="uil uil-github"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/fr.ank7872/" target="_blank">
                <i className="uil uil-instagram-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default HomePage;

import { motion } from 'framer-motion';

const Project = ({ title, imageURL, description, live, github }) => {
  const transition = { type: 'tween', duration: 2 };
  return (
    <div className="project-container">
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={transition}
        src={imageURL}
        alt="admin"
      />
      <div className="project-details">
        <h1>{title}</h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {description}
        </motion.p>
        <div className="project-links">
          <a href={live} target="_blank" className="project-links-a">
            See live <i className="uil uil-arrow-up-right project-link"></i>
          </a>
          <a href={github} target="_blank" className="project-links-a">
            Source <i className="uil uil-github project-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

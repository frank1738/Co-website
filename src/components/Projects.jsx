import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation, Pagination, A11y, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import TypewriterComponent from 'typewriter-effect';

import Project from './Project';
import { projectsData } from './dammy';

const Projects = () => {
  const transition = { type: 'tween', duration: 2 };
  return (
    <section className="projects">
      <motion.div
        className="project-section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={transition}
      >
        <div className="projects-header">
          <h1>Projects</h1>
          <span>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter.typeString('My most recent work').start();
              }}
            />
          </span>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectCube]}
            effect={'cube'}
            spaceBetween={50}
            slidesPerView={1}
            speed={800}
            navigation
            pagination={{ clickable: true }}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
          >
            {projectsData.map((project) => (
              <SwiperSlide className="project-main" key={project.id}>
                <Project
                  title={project.title}
                  imageURL={project.imageURL}
                  description={project.descripion}
                  live={project.live}
                  github={project.github}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

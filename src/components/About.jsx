import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='flex flex-wrap justify-between items-center'>
        <motion.div variants={textVariant()} className='flex-1'>
          <p className={styles.sectionSubText}>About Me</p>
          <h2 className={styles.sectionHeadText}>Over<span className="text-purple-300">view.</span></h2>
        </motion.div>

        <motion.div
          className='relative w-60 h-60 rounded-full overflow-hidden transition-transform duration-500 hover:scale-105 ml-10'
        >
          <img
            src='https://res.cloudinary.com/dybjklvdl/image/upload/v1739197336/IMG_20240815_102133109_HDR_PORTRAIT_1_h9ehbn.jpg'
            alt='Your Name'
            className='w-auto h-auto object-cover'
          />
        </motion.div>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello ! 👋🏻 I'm Prem, a part time developer and a full time explorer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

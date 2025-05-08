import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%", // Ensures the icon is fully rounded
        overflow: "hidden", // Ensures the image doesn't overflow the container
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <a
            href={experience.certificateLink} // Link to the certificate
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Ensures security for external links
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-full h-full object-cover rounded-full overflow-hidden transition-transform duration-600 hover:scale-105" // Added hover effect
            />
          </a>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          <a
            href={experience.certificateLink} // Link to the certificate
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Ensures security for external links
            className="text-secondary hover:text-purple-300 transition-colors duration-300" // Styling for hover effect
          >
            {experience.company_name}
          </a>
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work <span className="text-purple-300">Experience.</span>
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col rounded-full'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
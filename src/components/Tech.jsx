import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <h2 className={styles.sectionHeadText}>Tech Stack.</h2> 
      <p className={styles.sectionSubText}> I was familiar with : </p>
      <br />
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
      </div>
  );
};

export default SectionWrapper(Tech, "");

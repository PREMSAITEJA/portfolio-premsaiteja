import React from "react";
import { motion } from "framer-motion"; // Assuming framer-motion for section animations

import { styles } from "../styles"; // Your existing styles
import { SectionWrapper } from "../hoc"; // Your existing HOC
import { fadeIn, textVariant } from "../utils/motion"; // Your existing animation variants
import { testimonials } from "../constants"; // Your testimonial data from constants/index.js

// Import the AnimatedTestimonials component
// Make sure the path below is correct based on your file structure
import { AnimatedTestimonials } from "./ui/animated-testimonials";

// The original FeedbackCard component is no longer used in this section.
// You can remove this component definition if it's not used elsewhere.
/*
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
       </div>
    </div>
  </motion.div>
);
*/

const Feedbacks = () => {
  // Prepare the testimonial data in the format expected by AnimatedTestimonials.
  // AnimatedTestimonials expects an array of objects with 'quote', 'name', 'designation', and 'src'.
  // This mapping assumes your testimonials array in constants/index.js already has
  // these four properties for each testimonial.
  const animatedTestimonialData = testimonials.map(t => ({
    quote: t.quote,
    name: t.name,
    designation: t.designation,
    src: t.src, // Ensure 'src' exists and is correct for ALL testimonials in constants/index.js
  }));

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      {/* This div contains the section title and subtitle */}
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>On the Scene Spotlight</p>
          <h2 className={styles.sectionHeadText}>My 
            <span className="text-purple-300">     Mile</span>stones.
          </h2>
        </motion.div>
      </div>

      {/* This div will contain the AnimatedTestimonials component */}
      {/* We remove the flex and gap properties from the outer div here
          as AnimatedTestimonials handles its own layout and spacing internally. */}
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        {/* Render the AnimatedTestimonials component */}
        {/* Pass the formatted data and optionally enable autoplay */}
        <AnimatedTestimonials testimonials={animatedTestimonialData} autoplay={true} />
      </div>
    </div>
  );
};

// Wrap the Feedbacks component with your SectionWrapper HOC
export default SectionWrapper(Feedbacks, "");

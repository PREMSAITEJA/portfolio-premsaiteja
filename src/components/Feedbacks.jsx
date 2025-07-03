import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// Import the AnimatedTestimonials component
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Feedbacks = () => {
  // Prepare the testimonial data for AnimatedTestimonials
  const animatedTestimonialData = testimonials.map(t => ({
    quote: t.quote,
    name: t.name,
    designation: t.designation,
    src: t.src,
  }));

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      {/* Section Header */}
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>On the Scene Spotlight</p>
          <h2 className={styles.sectionHeadText}>
            My 
            <span className="text-purple-300"> Mile</span>stones.
          </h2>
        </motion.div>
      </div>

      {/* Animated Testimonials */}
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <AnimatedTestimonials 
            testimonials={animatedTestimonialData} 
            autoplay={true} 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

"use client"

import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import { testimonials } from "../constants"
import { AnimatedTestimonials } from "./ui/animated-testimonials"

const Feedbacks = () => {
  return (
    <div className="mt-12 w-full max-w-full overflow-hidden rounded-[20px] bg-black-100">
      {/* Section title and subtitle */}
      <div className={`rounded-2xl bg-tertiary ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className={styles.sectionSubText}>On the Scene Spotlight</p>
          <h2 className={styles.sectionHeadText}>
            My <span className="text-purple-300">Mile</span>stones.
          </h2>
        </motion.div>
      </div>

      {/* AnimatedTestimonials component for milestones */}
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")

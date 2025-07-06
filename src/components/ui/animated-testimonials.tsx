"use client"

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

type Milestone = {
  quote: string
  name: string
  designation: string
  src: string
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Milestone[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  // Safety check for empty testimonials
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <div className="mx-auto max-w-sm px-2 py-8 font-sans antialiased md:max-w-4xl md:px-4">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((milestone, index) => (
                <motion.div
                  key={milestone.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={milestone.src || "/placeholder.svg"}
                    alt={milestone.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center border-2 border-purple-500/20"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-2">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{testimonials[active].name}</h3>
            <p className="text-sm text-purple-300 mb-4">{testimonials[active].designation}</p>
            <motion.p className="text-base text-gray-300 leading-relaxed">
              {(testimonials[active].quote || "").split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-6">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/80 hover:bg-purple-600 transition-all duration-300 backdrop-blur-sm border border-purple-500/20"
            >
              <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/80 hover:bg-purple-600 transition-all duration-300 backdrop-blur-sm border border-purple-500/20"
            >
              <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

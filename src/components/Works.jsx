"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"; // Assuming the path to 3d-card.tsx
import { projects } from "../../data"; // Importing the projects data

const RecentProjects = () => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-white">
        No projects available at the moment.
      </div>
    );
  }

  return (
    <div className="w-full py-20 mt-5">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-300 text-center">
        A small selection of <span className="text-white">recent projects</span>
      </h1>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center p-4 md:p-10 lg:p-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <CardContainer className="w-full h-full flex items-center justify-center">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] sm:w-[20rem] md:w-[22rem] lg:w-[24rem] h-auto rounded-xl border p-4 sm:p-6">
                <CardItem
                  translateZ="20"
                  className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white line-clamp-1"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="50"
                  className="text-neutral-500 text-sm max-w-sm mt-3 dark:text-neutral-300 line-clamp-10"
                >
                  {project.des}
                </CardItem>
                <CardItem
                  translateZ="40"
                  className="w-full mt-4 overflow-hidden rounded-xl relative group" // Added 'relative' and 'group' for hover effects
                >
                  <div className="relative w-full h-[20vh] md:h-[20vh] lg:h-[22vh] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="z-auto absolute bottom-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" // Added hover scale effect
                    />
                    {/* Optional overlay for better visual effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                  </div>
                </CardItem>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.iconLists.map((icon, iconIndex) => (
                    <img
                      key={iconIndex}
                      src={icon}
                      alt="icon"
                      className="w-8 h-7 "
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center mt-7">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple  px-4 py-2 text-white bg-white-700 hover:bg-orange-700 rounded-full text-xs md:text-sm lg:text-base transition duration-300 ease-in-out"
                  >
                    <FaGithub className="mr-2" />
                    View Source
                  </a>
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white bg-white-700 hover:bg-orange-700 rounded-full text-xs md:text-sm lg:text-base transition duration-300 ease-in-out"
                  >
                    Live Site →
                  </a>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
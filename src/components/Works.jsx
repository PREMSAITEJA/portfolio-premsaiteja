import React from "react";
import { FaGithub } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projects } from "../../data";

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
                  className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white line-clamp-2"
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
                  className="w-full mt-4 overflow-hidden rounded-xl relative group"
                >
                  <div className="relative w-full h-[20vh] md:h-[20vh] lg:h-[22vh] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="z-auto absolute bottom-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                  </div>
                </CardItem>
                
                {/* Technology Icons Section - Improved */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.iconLists && project.iconLists.length > 0 ? (
                    project.iconLists.map((icon, iconIndex) => (
                      <div key={iconIndex} className="relative group">
                        <img
                          src={icon}
                          alt={`Technology ${iconIndex + 1}`}
                          className="w-8 h-8 object-contain rounded-md p-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                          onError={(e) => {
                            // Fallback for broken images
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E";
                          }}
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                          {icon.split('/').pop()?.split('.')[0] || 'Technology'}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm">No technologies listed</div>
                  )}
                </div>

                <div className="flex justify-between items-center mt-7">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-xs md:text-sm lg:text-base transition duration-300 ease-in-out"
                  >
                    <FaGithub className="mr-2" />
                    View Source
                  </a>
                  {project.liveSite && (
                    <a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-full text-xs md:text-sm lg:text-base transition duration-300 ease-in-out"
                    >
                      Live Site →
                    </a>
                  )}
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
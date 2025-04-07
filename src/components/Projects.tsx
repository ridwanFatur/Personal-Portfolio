import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { projects } from "@/data/projects";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const projectsPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(projects.length / projectsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Swipe or use the arrows to see
            more.
          </p>
        </motion.div>

        <div className="relative">
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out py-4"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideProjects = projects.slice(
                  slideIndex * projectsPerView,
                  slideIndex * projectsPerView + projectsPerView
                );

                return (
                  <div
                    key={slideIndex}
                    className="min-w-full flex flex-col md:flex-row gap-6 justify-center"
                  >
                    {slideProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col"
                      >
                        <div className="relative overflow-hidden group h-48">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-blue-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors"
                            >
                              <FaGithub />
                            </a>
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors"
                            >
                              <FaExternalLinkAlt />
                            </a>
                          </div>
                        </div>
                        <div className="p-6 flex-grow">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white p-3 rounded-full shadow-md z-10 text-blue-600 hover:bg-blue-50 cursor-pointer"
            aria-label="Previous slide"
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white p-3 rounded-full shadow-md z-10 text-blue-600 hover:bg-blue-50 cursor-pointer"
            aria-label="Next slide"
          >
            <IoIosArrowForward size={20} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

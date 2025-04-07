import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaYoutube, FaPlay } from "react-icons/fa";
import { videos } from "@/data/youtube_videos";
import { links } from "@/data/links";

const YouTubeVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  const videosPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(videos.length / videosPerView);

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
      id="videos"
      className="min-h-screen flex items-center justify-center py-16 bg-gray-50"
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
            My YouTube Channel
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <FaYoutube className="text-red-600 text-2xl" />
            Subscribe to my channel for web development tutorials and tips
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out py-4"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideVideos = videos.slice(
                  slideIndex * videosPerView,
                  slideIndex * videosPerView + videosPerView
                );

                return (
                  <div
                    key={slideIndex}
                    className="min-w-full flex flex-col md:flex-row gap-6 justify-center"
                  >
                    {slideVideos.map((video, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/3"
                      >
                        <div className="relative group">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <a
                              href={`https://youtube.com/watch?v=${video.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                            >
                              <FaPlay className="text-white text-xl ml-1" />
                            </a>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                            {video.title}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                            {video.description}
                          </p>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>{video.views} views</span>
                            <span>{video.date}</span>
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

        <div className="text-center mt-12">
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <FaYoutube className="mr-2" />
            Visit My YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;

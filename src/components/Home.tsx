import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "@/assets/image_profile.jpg";
import { links } from "@/data/links";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 md:pt-0"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Ridwan Faturrahman</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Software Engineer
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            I build dynamic, responsive websites that blend technology with
            innovation. When I'm not coding, you'll catch me diving into cloud
            tech or hitting the trails for a jog.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
            </a>
          </div>
          <div className="flex mt-8 gap-4 justify-center md:justify-start">
            <a
              href={links.linkedin}
              className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href={links.github}
              className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href={links.youtube}
              className="text-gray-600 hover:text-red-600 text-2xl transition-colors"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
            <img
              src={profileImage}
              alt="Ridwan Faturrahman"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

import { motion } from "framer-motion";
import resumePDF from "../assets/resume.pdf";
import { skills } from "@/data/skills";

const About = () => {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600 mb-4">
              I'm a dedicated Software Engineer with over 4 years of experience,
              starting my journey as an Android Developer before transitioning
              into roles as a Flutter Developer, Frontend Developer, and
              eventually Backend Developer.
            </p>
            <p className="text-gray-600 mb-4">
              My passion for technology has driven me to build a diverse skill
              set, working extensively with React, TypeScript, Tailwind CSS,
              Django, Node.js, and still dabbling in Flutter. I'm also diving
              into DevOps, exploring tools like Docker, Burp Suite, Cloudflare,
              and more to broaden my expertise.
            </p>
            <p className="text-gray-600 mb-6">
              Outside of coding, I love staying active with jogging and
              badminton, unwinding with movies, and digging into the latest
              advancements in cloud technology. I'm always eager to tackle new
              challenges and expand my horizons in the ever-evolving tech world.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors"
              >
                Hire Me
              </a>
              <a
                href={resumePDF}
                download="Ridwan_Faturrahman_CV.pdf"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg font-medium transition-colors"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <span className="font-medium text-gray-800">
                    {skill.name}
                  </span>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      skill.level === "Advanced"
                        ? "bg-blue-100 text-blue-700"
                        : skill.level === "Medium"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

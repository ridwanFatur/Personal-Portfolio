import { experiences } from "@/data/experiences";
import { motion } from "framer-motion";
import { BsBriefcase } from "react-icons/bs";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-16 bg-gray-50 pt-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2"></div>

              {/* Timeline node */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <BsBriefcase className="text-white" />
                </div>
              </div>

              <div
                className={`md:w-1/2 bg-white p-6 rounded-lg shadow-md ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="md:hidden flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                    <BsBriefcase className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                </div>
                <div className="hidden md:block">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                </div>
                <h4 className="text-lg text-blue-600 mb-2">{exp.company}</h4>
                <p className="text-gray-500 mb-4">{exp.duration}</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

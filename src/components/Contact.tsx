import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { links } from "@/data/links";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co service
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);

      const response = await fetch(
        "https://formsubmit.co/ridwan.faturrahman.godjali@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError(true);
      setSubmitMessage("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitMessage("");
        setSubmitError(false);
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
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
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open
            to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3 bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-blue-600 mt-1 mr-4">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium mb-1">Email</h4>
                  <a
                    href={`mailto:{links.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                  >
                    {links.email}
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="text-blue-600 mt-1 mr-4">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium mb-1">Phone</h4>
                  <a className="text-gray-600 hover:text-blue-600 transition-colors">
                    {links.phone}
                  </a>
                </div>
              </div> */}

              <div className="flex items-start">
                <div className="text-blue-600 mt-1 mr-4">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium mb-1">Location</h4>
                  <p className="text-gray-600">{links.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-gray-700 font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 text-2xl transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-400 text-2xl transition-colors"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Me a Message
            </h3>

            {submitMessage && (
              <div
                className={`mb-6 p-4 ${
                  submitError
                    ? "text-red-700 bg-red-100"
                    : "text-green-700 bg-green-100"
                } rounded-lg`}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder="Hello, I would like to discuss a project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg transition-colors ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "hover:bg-blue-700 cursor-pointer"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

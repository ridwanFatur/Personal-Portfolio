import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">John Doe</h2>
            <p className="text-gray-400 max-w-md">
              Frontend developer and UI/UX designer creating beautiful,
              responsive websites and applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-xl transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 text-xl transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-xl transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} John Doe. All Rights Reserved.</p>
            </div>

            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-6 flex justify-center items-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using React,
            TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

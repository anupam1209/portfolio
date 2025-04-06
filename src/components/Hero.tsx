import React from "react";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Hero: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Dark Mode Toggle Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">Anupam</span>
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A skilled Software Engineer with expertise in Java, C, and C++,
            specializing in object-oriented programming, data structures and
            algorithms, debugging, networking, operating systems, DBMS, React,
            Node.js, multithreading, and POS systems
          </p> */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A passionate Full Stack Developer crafting innovative web solutions
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I specialize in building modern web applications using cutting-edge
            technologies. Let's work together to bring your ideas to life!
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/anupam1209"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anupam-prakash-54822818b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:anupamprakash.232cs002@nitk.edu.in"
              className="p-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

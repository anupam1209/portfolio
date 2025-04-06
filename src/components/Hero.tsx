import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Anupam Prakash</span>
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A skilled Software Engineer with expertise in Java, C, and C++,
            specializing in object-oriented programming, data structures and
            algorithms, debugging, networking, operating systems, DBMS, React,
            Node.js, multithreading, and POS systems
          </p> */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Computer Science student with expertise in developing POS systems
            and software engineering. Currently pursuing an MTech at NIT
            Karnataka. Previously contributed to global payment applications at
            Verifone.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/anupam1209"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
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

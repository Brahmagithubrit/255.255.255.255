import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  
} from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import React from "react";

const Footer = () => {
  return (
    <footer className="order-1 h-auto lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative border bg-gradient-to-r to-[#0a0d37] text-white py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-around grid grid-cols-12 gap-8 mb-12">
          {/* About Column */}
          <div className="col-span-4 pr-8 border-r border-gray-700">
            <h2 className="text-3xl font-bold mb-6">Brahmananda Tosh</h2>
            <p className="text-gray-400 mb-6">
              Passionate full-stack developer with a keen eye for design and a
              love for creating seamless user experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Projects Column */}
          <div className="col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Latest Projects</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-300 transition-colors"
                  >
                    BlockLytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Brain health monitoring Website
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Crypto Analytics
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          {/* <div className="col-span-3">
            <h3 className="text-xl font-semibold mb-4">Recent Blog Posts</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="block group">
                  <h4 className="font-medium group-hover:text-amber-300 transition-colors">
                    Mastering React Hooks
                  </h4>
                  <p className="text-sm text-gray-400">June 15, 2023</p>
                </a>
              </li>
              <li>
                <a href="#" className="block group">
                  <h4 className="font-medium group-hover:text-amber-300 transition-colors">
                    Building Scalable APIs with Node.js
                  </h4>
                  <p className="text-sm text-gray-400">May 22, 2023</p>
                </a>
              </li>
              <li>
                <a href="#" className="block group">
                  <h4 className="font-medium group-hover:text-amber-300 transition-colors">
                    CSS Grid: A Complete Guide
                  </h4>
                  <p className="text-sm text-gray-400">April 10, 2023</p>
                </a>
              </li>
            </ul>
          </div> */}

          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <HiMail className="w-5 h-5 mr-2 text-amber-300" />
                <a
                  href="mailto:john@example.com"
                  className="hover:text-amber-300 transition-colors"
                >
                  brahmah7011@gmail.com{" "}
                </a>
              </li>
              <li className="flex items-center">
                <HiPhone className="w-5 h-5 mr-2 text-amber-300" />
                <a
                  href="tel:+919337754996"
                  className="hover:text-amber-300 transition-colors"
                >
                  +91 9337754996
                </a>
              </li>
            </ul>
            
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-10">
          {/* About Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Brahmananda Tosh</h2>
            <p className="text-gray-400 mb-6">
              Passionate full-stack developer with a keen eye for design and a
              love for creating seamless user experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Brahmagithubrit"
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/brahmananda-tosh-770995266/"
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Brahmanand3151"
                className="text-gray-400 hover:text-amber-300 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Projects Section */}
          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Latest Projects
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <a href="#" className="hover:text-amber-300 transition-colors">
                  E-commerce Platform
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition-colors">
                  Task Management App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition-colors">
                  Portfolio Website
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2 text-center">
                Technologies
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          {/* Blog Posts Section */}
          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Recent Blog Posts
            </h3>
            <ul className="space-y-4">
              <li className="text-center">
                
              </li>
              <li className="text-center">
                <a href="#" className="block group">
                  <h4 className="font-medium group-hover:text-amber-300 transition-colors">
                    Building Scalable APIs with Node.js
                  </h4>
                  <p className="text-sm text-gray-400">May 22, 2023</p>
                </a>
              </li>
              <li className="text-center">
                <a href="#" className="block group">
                  <h4 className="font-medium group-hover:text-amber-300 transition-colors">
                    CSS Grid: A Complete Guide
                  </h4>
                  <p className="text-sm text-gray-400">April 10, 2023</p>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Get in Touch
            </h3>
            <ul className="space-y-2 flex flex-col items-center">
              <li className="flex items-center">
                <HiMail className="w-5 h-5 mr-2 text-amber-300" />
                <a
                  href="mailto:brahmah7011@gmail.com"
                  className="hover:text-amber-300 transition-colors"
                >
                  brahmah7011
                </a>
              </li>
              <li className="flex items-center">
                <HiPhone className="w-5 h-5 mr-2 text-amber-300" />
                <a
                  href="tel:+919337754996"
                  className="hover:text-amber-300 transition-colors"
                >
                  +91 9337754996
                </a>
              </li>
            </ul>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

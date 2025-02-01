import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import React from "react";

const technologies = [
  { name: "Java", icon: FaJava },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: FaDocker },
  { name: "Python", icon: FaPython },
];

const TechScroll = () => {
  return (
    <div className="order-1 h-auto lg:order-2 from-[#0d1224] relative  bg-gradient-to-r to-[#0a0d37] h-[600px]">
      <div className="h-full w-full mr-[40px] text-overflow:ellipsis overflow-hidden px-4 lg:px-8 py-4 lg:py-8">
        <div className="flex flex-col items-center">
          <div className="text-white text-2xl font-bold py-4 text-center font-mono">
            Technology
          </div>

          <div className="mt-4 pt-[100px] pb-[100px] flex animate-marquee whitespace-nowrap">
            <div className="flex">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col items-center justify-center mx-8 relative"
                >
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center relative overflow-hidden group">
                    <tech.icon className="text-5xl text-amber-300 z-10 transition-all duration-300 ease-in-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-radial from-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <span className="mt-2 text-amber-300 font-semibold">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }

          /* Ensures no horizontal scroll bar */
          .animate-marquee {
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default TechScroll;

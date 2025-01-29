import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { personalData } from "../Data/personalData.js";

const TypingEffect = ({ textSegments, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState([]);

  useEffect(() => {
    let index = 0;

    const typeCharacter = () => {
      if (index < textSegments.length) {
        const currentSegment = textSegments[index];
        setDisplayedText((prev) => [
          ...prev,
          { text: currentSegment.text, style: currentSegment.style },
        ]);
        index++;
        setTimeout(typeCharacter, typingSpeed);
      }
    };

    typeCharacter();

    return () => {
      index = textSegments.length;
    };
  }, [textSegments, typingSpeed]);

  return (
    <>
      {/* <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
        <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          Hello, <br />
          This is <span className=" text-pink-500">{personalData.name}</span>
          { , I'm a Professional }
          <span className=" text-[#16f2b3]">{personalData.designation}</span>.
        </h1>

        <div className="my-12 flex items-center gap-5">
          <Link
            to={personalData.github}
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsGithub size={30} />
          </Link>
          <Link
            to={personalData.linkedIn}
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsLinkedin size={30} />
          </Link>

          <Link
            to={personalData.twitter}
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <FaTwitterSquare size={30} />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="#contact"
            className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
          >
            <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </button>
          </Link>
        </div>
      </div> */}
      <pre className=" order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] h-[600px]">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-5">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>
        <div className=" overflow-auto border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 h-[500px]">
          <div className="flex gap-1 ml-[40px]">
            <code className="font-mono text-xs md:text-sm lg:text-base whitespace-pre-wrap">
              {displayedText.map((segment, idx) => (
                <span key={idx} className={segment.style}>
                  {segment.text}
                </span>
              ))}
              <span className="blink">|</span>
            </code>
          </div>
        </div>
      </pre>
    </>
  );
};

const Profile = () => {
  const messageSegments = [
    { text: "const ", style: "text-pink-500" },
    { text: "brahma", style: "text-white" },
    { text: " = {", style: "text-amber-300" },
    { text: "\n  name: ", style: "text-white" },
    { text: "'Brahmananda Tosh',", style: "text-amber-300" },
    { text: "\n  skills: ", style: "text-white" },
    {
      text: "['Java', ",
      style: "text-amber-300",
    },
    {
      text: "'html',",
      style: "text-amber-300",
    },
    {
      text: "'css',",
      style: "text-amber-300",
    },
    {
      text: "'tailwindcss',",
      style: "text-amber-300",
    },

    {
      text: "'Javascript',",
      style: "text-amber-300",
    },
    {
      text: "'React',",
      style: "text-amber-300",
    },
    {
      text: "'Node js',",
      style: "text-amber-300",
    },
    {
      text: "'Express js',",
      style: "text-amber-300",
    },
    {
      text: "'typescript',",
      style: "text-amber-300",
    },
    {
      text: "'mysql',",
      style: "text-amber-300",
    },
    {
      text: "'postgresql',",
      style: "text-amber-300",
    },
    {
      text: "'Mongo DB',",
      style: "text-amber-300",
    },
    {
      text: "'Docker',",
      style: "text-amber-300",
    },
    {
      text: "'python' ] ",
      style: "text-amber-300",
    },

    { text: "\n  languageSkills: ", style: "text-white" },
    { text: "['English', 'Hindi', 'Odia'],", style: "text-amber-300" },
    { text: "\n  achievements: ", style: "text-white" },
    {
      text: "['Google Developer Student Club Member', 'IBM Intern'],",
      style: "text-amber-300",
    },
    { text: "\n  experience: ", style: "text-white" },
    { text: "['Freelancer', 'Internship at IBM'],", style: "text-amber-300" },
    { text: "\n  hardWorker: ", style: "text-white" },
    { text: "true,", style: "text-orange-400" },
    { text: "\n  quickLearner: ", style: "text-white" },
    { text: "true,", style: "text-orange-400" },
    { text: "\n  problemSolver: ", style: "text-white" },
    { text: "true,", style: "text-orange-400" },
    { text: "\n  hireable: ", style: "text-green-400" },
    { text: "function() {", style: "text-orange-300" },
    { text: "\n    return ", style: "text-white" },
    { text: "this", style: "text-cyan-400" },
    {
      text: ".hardWorker && ",
      style: "text-white",
    },
    { text: "this", style: "text-cyan-400" },
    { text: ".problemSolver && ", style: "text-white " },
    { text: "this", style: "text-cyan-400" },
    { text: ".skills", style: "text-cyan-400" },
    { text: ".length", style: "text-white" },
    { text: " >= 5", style: "text-orange-300" },
    { text: ";", style: "text-white" },
    { text: "\n    },", style: "text-amber-300" },
    { text: "\n};", style: "text-amber-300" },
  ];

  return <TypingEffect textSegments={messageSegments} />;
};

export default Profile;

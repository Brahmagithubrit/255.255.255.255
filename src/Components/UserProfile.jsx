import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { personalData } from "../Data/personalData.js";

const TypingEffect = ({ textSegments, typingSpeed = 100, onComplete }) => {
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
      } else {
        if (onComplete) {
          onComplete();
        }
      }
    };

    typeCharacter();

    return () => {
      index = textSegments.length;
    };
  }, [textSegments, typingSpeed, onComplete]);

  return (
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
  );
};

const Profile = () => {
  const [showTypingEffect, setShowTypingEffect] = useState(true);

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

  return showTypingEffect ? (
    <TypingEffect textSegments={messageSegments} onComplete={() => setShowTypingEffect(false)} />
  ) : (
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
            {messageSegments.map((segment, idx) => (
              <span key={idx} className={segment.style}>
                {segment.text}
              </span>
            ))}
            <span className="blink">|</span>
          </code>
        </div>
      </div>
    </pre>
  );
};

export default Profile;

import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillSingle from "./SkillSingle";
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2  gap-10 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center ">
            <item.icon className="text-7xl text-MutedRose" />
            <p className="text-center font-body2 font-bold mt-4">
              {item.skill}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;

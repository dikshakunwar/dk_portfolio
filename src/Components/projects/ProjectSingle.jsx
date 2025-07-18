import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdDoubleArrow } from "react-icons/md";

const ProjectSingle = ({
  name,
  description,
  image,
  linkLive,
  linkStory,
  stack,
}) => {
  return (
    <div className="rounded-2xl w-full max-w-sm h-[600px] shadow-lg p-1 bg-black/25">
      <img
        src={image}
        alt=""
        className="rounded-t-2xl opacity-80 h-[220px] w-full hover:text-2xl "
      />
      <h2 className="text-3xl font-body2 font-bold text-black m-2 pl-1">
        {name}
      </h2>
      <p className="text-[1rem] font-body2 text-black m-2 p-1 text-justify">
        {description}
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-4 gap-1 m-3">
        {stack &&
          stack.map((tech, index) => (
            <button
              key={index}
              className="text-sm font-body2 text-white py-1 px-0 rounded-full bg-greyDark"
            >
              {tech.name}
            </button>
          ))}
      </div>
      <div className="flex flex-row m-4 gap-2">
        <button className="flex flex-row gap-1 text-sm bg-CustumBlue text-white rounded-full px-2 py-1 hover:scale-110 transition-all duration-500">
          <a href={linkLive}>Source Code</a>
          <MdOutlineArrowOutward />
        </button>
        <button className="flex flex-row gap-1 text-sm bg-black text-white rounded-full px-2 py-1 hover:scale-110 transition-all duration-500">
          Case Study
          <MdDoubleArrow />
        </button>
      </div>
    </div>
  );
};

export default ProjectSingle;

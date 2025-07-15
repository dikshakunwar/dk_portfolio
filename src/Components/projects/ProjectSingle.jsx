import React from "react";

const ProjectSingle = ({
  name,
  description,
  image,
  linkLive,
  linkStory,
  stack,
}) => {
  return (
    <div className="rounded-2xl h-[540px] shadow-lg p-1 bg-black/25 hover:border-1 border-greyDark transition-all duration-500">
      <img
        src={image}
        alt=""
        className="rounded-t-2xl opacity-80 h-[220px] hover:text-2xl "
      />
      <h2 className="text-3xl font-body2 font-bold text-black m-2 pl-1">
        {name}
      </h2>
      <p className="text-lg text-black m-2 p-1 text-justify">{description}</p>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-1 m-3">
        {stack &&
          stack.map((tech, index) => (
            <button
              key={index}
              className="font-body2 text-white py-1 px-0 rounded-full bg-greyDark"
            >
              {tech.name}
            </button>
          ))}
      </div>
      <div className="flex flex-row m-4 gap-2">
        <button className="bg-CustumBlue text-white rounded-full px-5 py-1 hover:scale-110 transition-all duration-500">
          Live
        </button>
        <button className="bg-black text-white rounded-full px-5 py-1 hover:scale-110 transition-all duration-500">
          Case Study
        </button>
      </div>
    </div>
  );
};

export default ProjectSingle;

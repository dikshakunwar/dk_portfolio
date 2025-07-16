import React from "react";

const SingleConSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-10 w-10 border border-black text-black rounded-full p-1 flex items-center justify-center">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleConSocial;

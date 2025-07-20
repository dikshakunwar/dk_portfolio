import React from "react";
import ProjectText from "./ProjectText";
import ProjectSingle from "./ProjectSingle";
const projects = [
  {
    name: "Portfolio",
    description:
      "It is a responsive and dynamic site built with React and Tailwind CSS to present my work and skills. It includes interactive project sections, tech tags, and links to GitHub, offering a complete view of my developer profile.",
    image: "/dk_portfolio/Images/image copy.png",
    linkLive: "https://github.com/dikshakunwar/dk_portfolio",
   // linkStudy: "#",
    stack: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
  },
  {
    name: "YelpCamp",
    description:
      "YelpCamp is a full-stack MERN project where users can explore, add, and review campgrounds. It features an interactive map that allows users to add their own campgrounds with location pins, making it easy to discover and share outdoor spots.",
    image: "/dk_portfolio/Images/image copy 3.png",
    linkLive: "https://github.com/dikshakunwar/YELP-CAMP",
    //linkStudy: "#",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
  },
  {
    name: "Image Label Generator",
    description:
      "Image Label Generator is a secure, AWS-powered project that lets users upload images to get automated labels and celebrity face detection using Rekognition. It includes user authentication and cloud storage for a seamless image processing experience.",
    image: "/dk_portfolio/Images/image.png",
    linkLive: "https://github.com/dikshakunwar/image_label_gen",
    //linkStudy: "#",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Rekognition" },
      { name: "Cognito" },
      { name: "EC2" },
      { name: "S3" },
    ],
  },
];

const ProjectMain = () => {
  return (
    <div id="project" className="flex flex-col md:mt-[100px] sm:mt-[400px]">
      <ProjectText />
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-9 lg:max-w-[1100px] md:max-w-[800px] sm:max-w-[400px] mx-auto lg:max-px-[100px] mt-10 p-2">
        {projects.map((item, index) => (
          <ProjectSingle
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
            linkLive={item.linkLive}
           // linkStory={item.linkStory}
            stack={item.stack}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectMain;

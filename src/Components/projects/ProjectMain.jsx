import React from "react";
import ProjectText from "./ProjectText";
import ProjectSingle from "./ProjectSingle";
const projects = [
  {
    name: "Portfolio",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    image: "../../../public/Images/image copy.png",
    linkLive: "#",
    linkStudy: "#",
    stack: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
  },
  {
    name: "YelpCamp",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    image: "../../../public/Images/image copy 3.png",
    linkLive: "#",
    linkStudy: "#",
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
      "A personal portfolio website to showcase my skills and projects.",
    image: "../../../public/Images/image.png",
    linkLive: "#",
    linkStudy: "#",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "AWS-Rekoginition" },
      { name: "Cognito" },
      { name: "EC2" },
      { name: "S3" },
    ],
  },
];

const ProjectMain = () => {
  return (
    <div>
      <ProjectText />
      <div className="grid md:grid-cols-3 sm:grid-cols-1  gap-9  my-16 md:-mx-[70px] md:px-[300px]">
        {projects.map((item, index) => (
          <ProjectSingle
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
            linkLive={item.linkLive}
            linkStory={item.linkStory}
            stack={item.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectMain;

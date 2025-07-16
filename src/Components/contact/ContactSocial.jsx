import React from "react";
import SingleConSocial from "./SingleConSocial";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleConSocial link="https://github.com/dikshakunwar" Icon={FaGithub} />
      <SingleConSocial
        link="https://www.linkedin.com/in/diksha-kunwar-3a9b4a314/"
        Icon={FaLinkedin}
      />
      <SingleConSocial link="" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;

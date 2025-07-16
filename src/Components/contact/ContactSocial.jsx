import React from "react";
import SingleConSocial from "./SingleConSocial";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleConSocial link="" Icon={FaGithub} />
      <SingleConSocial link="" Icon={FaLinkedin} />
      <SingleConSocial link="" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;

import React from "react";
import ContactSocial from "./ContactSocial";
import ContactInfo from "./ContactInfo";
const ContactRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="../../public/Images/email-image.png"
        alt=""
        className="max-w-[280px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactRight;

import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import ContactSingleI from "./ContactSingleI";
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-black">
      <ContactSingleI text="dikshakunwar02@gmail.com" Image={MdEmail} />
      <ContactSingleI text="8265811277" Image={FaPhoneAlt} />
      <ContactSingleI
        text="Haldwani, Uttarakhand ,India"
        Image={MdLocationOn}
      />
    </div>
  );
};

export default ContactInfo;

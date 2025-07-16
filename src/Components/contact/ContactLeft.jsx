import React from "react";
import ContactForm from "./ContactForm";

const ContactLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="font-body font-bold text-3xl mb-4">Get In Touch</h2>
        <p className="font-body2 ">
          Let’s build something awesome together! <br /> Feel free to drop your
          thoughts or questions below.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactLeft;

import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n4mpu87", "template_xd9fiai", form.current, {
        publicKey: "0HkOBPFNx2gvwRxLJ",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSucess("Message Sent !");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-CustumBlue">{sucess}</p>
      <form className="flex flex-col gap-4 " ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-white px-2"
          value={name}
          onChange={handleName}
        />
        <input
          name="form_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-white px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className=" rounded-lg bg-white p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-CustumBlue border border-CustumBlue text-white h-12 font-bold text-xl hover:bg-CustumBlue/70 transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

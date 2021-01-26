import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { serviceId, templateId, userId } from "./API";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }
  return (
    <div className="contact">
      <form onSubmit={sendEmail}>
        <label for="fname">Name</label>
        <input
          type="text"
          id="name"
          name="from_name"
          placeholder="Your name"
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="from_email"
          placeholder="Your email address"
          required
        />

        <label for="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject.."
          required
        />

        <label for="message">Message</label>
        <textarea
          id="subject"
          name="message"
          placeholder="Write something.."
          style={{ height: "200px" }}
        ></textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;

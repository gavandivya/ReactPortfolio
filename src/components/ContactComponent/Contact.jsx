import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0tra7ka",
        "template_js5p7ee",
        refForm.current,
        "BZh8x9n4AQTWJF-gL"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email please try again");
        }
      );
  };

  return (
    <div className="contactPage">
      <h2 className="text-2xl font-bold text-center uppercase">Contact me</h2>
      <p>
        I am interested in Freelancing opportunities. However if you have any
        other request or questions feel free to connect me. Thanks😌
      </p>
      <form action="" onSubmit={sendEmail} ref={refForm}>
        <input
          className="border border-slate-300 rounded-md"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          className="border border-slate-300 rounded-md"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          className="border border-slate-300 rounded-md"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          className="border border-slate-300 rounded-md"
          id="message"
          cols="10"
          rows="5"
          required
          placeholder="Message"
        ></textarea>
        <div className="text-center">
          <button className="btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

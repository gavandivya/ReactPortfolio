import React, { useContext, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import ThemeContext from "../../constants/ThemeContext";

const Contact = () => {
  const refForm = useRef();
  const { themeContext } = useContext(ThemeContext);

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
    <>
    <h2 className="text-3xl font-bold text-center uppercase">Contact me</h2>
    <div className="flex flex-wrap lg:!flex-nowrap justify-center" id="contact">
      <div>
      <p>
        I am interested in Freelancing Opportunities. However if you have any
        other request or have any doubts regarding Web Development, 
        Frontend Technologies feel free to connect me.<br/> I would be happy to help you. Thanks😌
      </p>
      <p><img width="32" height="32" src="https://img.icons8.com/color/48/marker--v2.png" alt="marker--v2" className="inline"/>
        <span className="font-semibold"> Borivali East, Mumbai 400066.</span>
      </p>
      <p>
      <img width="32" height="32" src="https://img.icons8.com/fluency/48/gmail-new.png" alt="gmail-new" className="inline"/>
        <span className="font-semibold">  onlyforcode19@gmail.com</span>
      </p>
      <p>You can also connect me on any social media platform.</p>
      </div>
      <form action="" onSubmit={sendEmail} ref={refForm} className="w-4/5">
        <input
          className={`border !border-b-4 !border-slate-50 rounded-md ${themeContext === "dark"?"darkMode":"lightMode"}`}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          className={`border !border-b-4 !border-slate-50 rounded-md ${themeContext === "dark"?"darkMode":"lightMode"}`}
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className={`border !border-b-4 !border-slate-50 rounded-md ${themeContext === "dark"?"darkMode":"lightMode"}`}
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
    </>

  );
};

export default Contact;

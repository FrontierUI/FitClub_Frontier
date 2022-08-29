import React, { useRef } from "react";

import "./styles/Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  // service_9l3ow4l

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9l3ow4l",
        "template_ywmkgah",
        form.current,
        "_VYdh76ReZtvsO7aN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />

        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="emailCont" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Email Address"
          />

          <button className="btn btnJoin">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;

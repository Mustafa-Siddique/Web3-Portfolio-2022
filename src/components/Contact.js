import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { AiFillCheckCircle, AiFillAlert } from "react-icons/ai";

export default function Contact() {
  const [handleSuccess, setHandleSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_50jbrxi",
        "template_vyxdxar",
        e.target,
        "jRZ-qLtJj-sGPE9fb"
      )
      .then(
        (result) => {
          setHandleSuccess("success");
          e.target.reset();
        },
        (error) => {
          setHandleSuccess("err");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-main">
      <div className="text-center">
        <h3>CONTACT</h3>
        <h2>What's on Your Mind?</h2>
        <p
          className="mx-auto text-center"
          style={{
            maxWidth: "1000px",
            fontSize: "1.6rem",
            fontFamily: "montserrat",
          }}
        >
          Ready to transform your business online/decentralised? I'm here for
          you to offer a full range of services including Responsive Web Design,
          Web3 more. Contact Us today to see how we can help you!
        </p>
      </div>
      <div className="contactForm">
        {/* SUCCESS ALERT */}
        <div
          className={
            handleSuccess == "success"
              ? "alert alert-success d-flex align-items-center my-2"
              : "alert alert-success d-none align-items-center my-2"
          }
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2 "
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
            <AiFillCheckCircle fontSize={25} />
          </svg>
          <div>Your response has been submitted successfully!</div>
        </div>
        {/* FAILED ALERT */}
        <div
          className={
            handleSuccess == "err"
              ? "alert alert-danger d-flex align-items-center my-2"
              : "alert alert-danger d-none align-items-center my-2"
          }
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Danger:"
          >
            <AiFillAlert fontSize={25} />
          </svg>
          <div>Response submission failed!</div>
        </div>
        {/* CONTACT FORM */}
        <form
          name="contact-form"
          method="post"
          onSubmit={sendEmail}
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div id="formName">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              id=""
              required
            />
          </div>
          <div id="formMail">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              id=""
            />
          </div>
          <div id="formMsg">
            <textarea
              name="message"
              id=""
              placeholder="Your Message Here!"
              required
              rows="10"
            ></textarea>
          </div>
          <div
            className="g-recaptcha my-2"
            data-sitekey="6LesOwYhAAAAAOwEQ1bAn-GnSusbaDl2znk2c47n"
          ></div>
          <input
            id="formSubmit"
            className="btnYellow btn"
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
}

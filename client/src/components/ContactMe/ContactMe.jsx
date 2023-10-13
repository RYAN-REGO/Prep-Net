import React from "react";
import "./ContactMe.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("moqoyevn");
  const navigate = useNavigate();

  if(state.succeeded)
  {
    toast.success("Feedback Submitted Successfully 🎉");
    navigate('/');
  }


  return (
    <div className="contactMe_mainContainer">
      <div className="contactMe_header">Thank you for your feedback!</div>
      <div className="contact_container">
        <form onSubmit={handleSubmit} style={{width : '100%'}}>
        <div className="contact_inputs">
          <div className="email">
            <input
              type="email"
              className="emailInput"
              placeholder="Enter your email address"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="feedback">
            <textarea
              rows="10"
              type="text"
              className="feedBackInput"
              placeholder="Enter your valuable feedback"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="contact_buttons">
            <Link
              to="/"
              className="sendButton"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              Back to Home Page
            </Link>
            <button className="sendButton" type="submit" disabled={state.submitting}>
                SEND
            </button>
          </div>
        </div>
        </form>
        <div className="contactMe_linkedIn">
          <button className="LinkedInProf" href="https://www.linkedin.com/in/ryan-rego-3111ab229/">
            <a href="https://www.linkedin.com/in/ryan-rego-3111ab229/" style={{textDecoration : 'none', color : 'grey'}}>Connect on LinkedIn</a>
            <a
              href="https://www.linkedin.com/in/ryan-rego-3111ab229/"
              target="_blank"
              className="link"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 256 256"
                style={{ position: "relative", top: "0px" }}
              >
                <g fill="none">
                  <rect width="256" height="256" fill="#fff" rx="60" />
                  <rect width="256" height="256" fill="#0A66C2" rx="60" />
                  <path
                    fill="#fff"
                    d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                  />
                </g>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

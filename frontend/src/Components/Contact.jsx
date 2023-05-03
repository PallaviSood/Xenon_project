import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, interest, number, message);
  };

  return (
    <div className="contact">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="contact__title">
            <p>Love to hear from you, Get in touch</p>
          </div>
          <div className="first_form">
            <div className="name">
              <label>Your name</label>
              <br />
              <input
                name="name"
                placeholder="enter your name...."
                type="text"
              />
            </div>
            <div className="email">
              <label>Your email</label>
              <br />
              <input
                name="email"
                placeholder="enter your email...."
                type="email"
              />
            </div>
          </div>
          <div className="second__form">
            <div className="name">
              <label>Your interest</label>
              <br />
              <input
                name="interest"
                placeholder="enter your interest...."
                type="text"
              />
            </div>
            <div className="email">
              <label>Your contact number</label>
              <br />
              <input
                name="number"
                placeholder="enter your number...."
                type="tel"
              />
            </div>
          </div>
          <div className="email">
            <label>Message</label>
            <br />
            <input
              name="email"
              className="textarea"
              placeholder="enter your email...."
              type="email"
            />
          </div>
          <button>Just send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

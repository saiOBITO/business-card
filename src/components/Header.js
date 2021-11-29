import React from "react"
import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"

export default function Header() {
  return (
    <div className="header">
      <h2>Saikat Srimani</h2>
      <h5>Full stack Developer</h5>
      <h6>saikat_srimani.com</h6>
      <a href ="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKhwTRkHlJpvSBFgFlZfBVWDqrCzkPzNbgBTpmvNKpgZltLLDXHjgJWBwvlTvqjRdLV"><div className="email">
        <img src={email} className="email-icon" alt="email-icon"></img>
        <h6>Email</h6>
      </div></a>
      <a href="https://www.linkedin.com/in/saikat-srimani-63b7b1156/"><div className="linkedin">
        <img src={linkedin} className="linkedin-icon" alt="linkedin-icon"></img>
        <h6>Linkedin</h6>
      </div></a>
    </div>
  );
}
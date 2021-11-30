import React from "react"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import reddit from "../assets/reddit.png"
import git from "../assets/github.png"

export default function Footer() {
    return (
      <div className="footer">
        <a href="https://twitter.com/saikatsrimani" ><img src={twitter} alt=" click here to check my twitter"></img></a>
        <a href="https://www.facebook.com/saikat.srimani" ><img src={facebook} alt=" click here to check my facebook"></img></a>
        <a href="https://www.instagram.com/saikatsrimani/" ><img src={instagram} alt=" click here to check my instagram"></img></a>
        <a href="https://www.reddit.com/user/saiOBITO" ><img src={reddit} alt=" click here to check my reddit"></img></a>
        <a href="https://github.com/saiOBITO" ><img src={git} alt=" click here to check my github"></img></a>
      </div>
    );
  }
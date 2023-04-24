import React from "react";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import leoimage from "../Leonard Poša-linkedin.png";


export default function HeroContent() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-introduction">
          <p>Hello, I'm</p>
          <h1>Leonard Posa</h1>
          <p>Front End Developer</p>
          <div>
            <ArrowRightIcon />
            <div>
              <p>React developer at Emakina.rs</p>
            </div>
          </div>
        </div>
        <div className="hero-description">
          I am a young front end developer. I have worked on various projects
          that included HTML, CSS, JavaScript, React, React-Native. My primary
          focus, and my favorite technology to work with is React.
        </div>
        <div className="hero-social">
          <a
            className="link"
            href="https://www.facebook.com/pox1997/"

          >
            <FacebookRoundedIcon sx={{ fontSize: 30 }} />
          </a>
          <a
            className="link"
            href="https://www.instagram.com/pox97/"

          >
            <InstagramIcon sx={{ fontSize: 30 }} />
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/leonard-posa-1521971a7/?originalSubdomain=rs"

          >
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img src={leoimage} alt="heroimage" />
      </div>
    </div>
  );
}

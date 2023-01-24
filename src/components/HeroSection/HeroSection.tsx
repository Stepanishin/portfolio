import React, { FC } from "react";
import "./HeroSection.scss";
import { HashLink } from "react-router-hash-link";
import Society from "../UI/Society/Society";

const HeroSection: FC = () => {
  return (
    <main className="container heroPage_container">
      <div className="heroPage_description">
        <p>Hello, I`m Evgenii.</p>
        <p>I`m a Front-End Web Developer</p>
        <Society />
        <HashLink className="heroPage_link" smooth to="/#SKILLS">
          See more
        </HashLink>
      </div>
    </main>
  );
};

export default HeroSection;

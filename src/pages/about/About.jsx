import React from "react";
import aboutImg from "../../assets/aboutImage.png";
import twitterLogo from "../../assets/twitter.png";
import githubLogo from "../../assets/github.png";
import linkedinLogo from "../../assets/linkedin.png";
import {
  AboutContainer,
  AboutImg,
  AboutLogoContainer,
  AboutSocialMediaIcon,
  AboutSocialMediaLink,
  AboutText,
} from "./About.style";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutImg src={aboutImg} />
        <AboutText>
          Hello! I'm Emre.. I work as a frontend developer freelance. The
          technologies I used in this project are as follows;
          <br />
          <br />*
          <span style={{ color: "black", textDecoration: "underline" }}>
            Styled Component
          </span>
          <br />*
          <span style={{ color: "black", textDecoration: "underline" }}>
            React Router
          </span>
          <br />*
          <span style={{ color: "black", textDecoration: "underline" }}>
            useContext for Global State management
          </span>
          <br />
          <br />
          <span style={{ color: "navy" }}>
            If you want to browse my other Projects, you can click the GitHub
            logo on the page!
          </span>
        </AboutText>
        <AboutLogoContainer>
          <AboutSocialMediaLink
            href="https://twitter.com/emresoyludev"
            target="_blank"
          >
            <AboutSocialMediaIcon src={twitterLogo} />
          </AboutSocialMediaLink>
          <AboutSocialMediaLink
            href="https://github.com/soyluemre"
            target="_blank"
          >
            <AboutSocialMediaIcon src={githubLogo} />
          </AboutSocialMediaLink>
          <AboutSocialMediaLink
            href="https://linkedin.com/in/emre-soylu"
            target="_blank"
          >
            <AboutSocialMediaIcon src={linkedinLogo} />
          </AboutSocialMediaLink>
        </AboutLogoContainer>
      </AboutContainer>
    </>
  );
};

export default About;

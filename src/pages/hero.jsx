import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import { useColorMode } from "../assets/script/DarkModeContext";
import "../styles/style.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { mode, backgroundColor, fontHero, fontColor } = useColorMode();

  // Common button styles
  const buttonStyle = {
    background: backgroundColor,
    color: fontColor,
    textDecoration: "none",
    border: "1px solid #000",
    transition: "background-color 0.7s ease",
    margin: "5px",
    // Add other common styles here
  };

  // Dark mode specific button styles
  const darkModeButtonStyle = {
    backgroundColor: "#000",
    color: "#FFF",
    border: "1px solid #FFF",
    margin: "5px",
    // Add other dark mode specific styles here
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when it enters the viewport
  });

  // Define the animation properties
  const fadeInUp = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(50px)",
    },
    to: {
      opacity: inView ? 1 : 0, // Animate opacity when in view
      transform: inView ? "translateY(0)" : "translateY(30px)", // Animate translateY when in view
    },
    config: {
      duration: 1000,
    },
  });

  return (
    <Box
      className="heroSection"
      id="hero"
      sx={{
        background: backgroundColor,
        color: fontHero,
        // minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        transition: "background-color 0.7s ease",
        marginTop: "-0px",
      }}
    >
      <div ref={ref}>
        <animated.div style={fadeInUp}>
          <div className="hero">
            <h1 className="firstName">
              Hey! I'm <span>Miguel!</span>
            </h1>
            {/* <h1>MILANEZ</h1> */}
            <p className="hero-desc">
              Software Engineer - Web Developer - Front-End Developer
            </p>
            <div className="btnContainer">
              <Button
                style={{
                  ...buttonStyle,
                  ...(mode === "dark" ? darkModeButtonStyle : {}),
                }}
              >
                <Link
                  to="contact"
                  className="btnStyle"
                  smooth={true}
                  offset={200}
                  duration={1000}
                >
                  <span className="btnText">Let's Connect</span>
                </Link>
              </Button>

              <Button
                style={{
                  ...buttonStyle,
                  ...(mode === "dark" ? darkModeButtonStyle : {}),
                }}
              >
                <Link
                  className="btnStyle"
                  smooth={true}
                  offset={200}
                  duration={1000}
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1JBd50x5L0Zb5J21iHemOoU0qqCnaELn6/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  <span className="btnText">My Resume</span>
                </Link>
              </Button>
            </div>
          </div>
        </animated.div>
      </div>
    </Box>
  );
};

export default Hero;

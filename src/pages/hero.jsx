import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import { useColorMode } from "../assets/script/DarkModeContext";
import "../styles/style.css";

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

  return (
    <Box
      className="pageSection"
      id="hero"
      sx={{
        background: backgroundColor,
        color: fontHero,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        transition: "background-color 0.7s ease",
        marginTop: "-0px",
      }}
    >
      <div className="hero">
        <h1>MIGUEL LORENZO</h1>
        <h1>MILANEZ</h1>
        <p>Software Engineer - Web Developer - Front-End Developer</p>
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
              <span>Let's Connect</span>
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
              <span>My Resume</span>
            </Link>
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Hero;

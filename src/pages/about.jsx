// import React from "react";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";

import Button from "@mui/material/Button";

import image1 from "../assets/images/364148860_7042763322419713_3717389514963905346_n.png";

const About = () => {
  const { mode, backgroundColor, fontColor } = useColorMode();
  return (
    <Box
      className="pageSection"
      id="hero"
      sx={{
        background: backgroundColor,
        color: fontColor,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        transition: "background-color 0.7s ease",
      }}
    >
      <div className="pageSection" id="about">
        <div className="heroContainer">
          <div className="labelContainer">
            <h1>About</h1>
            <div class="about-grid-container">
              <div class="profileImage">
                <img src={image1} width="70%" alt="Image 1" />
              </div>

              <div class="aboutDescription">
                {" "}
                Experienced Frontend Developer with a demonstrated history of
                working in the information technology and services industry.
                Skilled in Redmine, PHP, JavaScript, CMS, Microsoft SharePoint,
                RPA(UiPath) and Project Management.
                <div
                  className="btnGroup"
                  sx={{
                    background: backgroundColor,
                    color: fontColor,
                    transition: "background-color 0.7s ease",
                  }}
                >
                  <Button
                    className="button"
                    sx={{
                      background: backgroundColor,
                      color: fontColor,
                      transition: "background-color 0.7s ease",
                    }}
                  >
                    Know me more
                  </Button>
                  <Button
                    className="button"
                    sx={{
                      background: backgroundColor,
                      color: fontColor,
                      transition: "background-color 0.7s ease",
                    }}
                  >
                    My Skills
                  </Button>
                  <Button
                    className="button"
                    sx={{
                      background: backgroundColor,
                      color: fontColor,
                      transition: "background-color 0.7s ease",
                    }}
                  >
                    Completed Trainings
                  </Button>
                  <Button
                    className="button"
                    sx={{
                      background: backgroundColor,
                      color: fontColor,
                      transition: "background-color 0.7s ease",
                    }}
                  >
                    My Certificates
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;

// import React from "react";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { useColorMode } from "../assets/scripts/DarkModeContext"; // Update the path
import "../styles/style.css";

const Experience = () => {
  const { mode, backgroundColor, fontColor } = useColorMode();
  return (
    <Box
      className="pageSection"
      id="hero"
      sx={{
        background: backgroundColor,
        color: fontColor,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        transition: "background-color 0.7s ease",
      }}
    >
      <div className="pageSection" id="Experience">
        <div className="heroContainer">
          <div className="labelContainer">
            <h1>Experience</h1>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Experience;

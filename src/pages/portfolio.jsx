// import React from "react";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";
import ImageGallery from "../components/imageGallery";
import image from "../assets/images/logo192.png";

const Portfolio = () => {
  const { mode, backgroundColor, fontColor } = useColorMode();

  return (
    <Box
      className="pageSection"
      id="portfolio"
      sx={{
        background: backgroundColor,
        color: fontColor,
        minHeight: "80vh",
        paddingTop: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        transition: "background-color 0.7s ease",
        // width: "80vw",
      }}
    >
      <div className="pageSection" id="portfolio">
        <div className="portfolioContainer">
          <div className="labelContainer">
            <h1 className="port-h1">Portfolio</h1>
          </div>
          <ImageGallery />
        </div>
      </div>
    </Box>
  );
};

export default Portfolio;

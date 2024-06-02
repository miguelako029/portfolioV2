// import React from "react";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";
import ImageGallery from "../components/imageGallery";
import Portfolio from "../components/projectGallery/portfolio";
// import image from "../assets/images/logo192.png";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const PortfolioPage = () => {
  const { mode, backgroundColor, fontColor } = useColorMode();

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when it enters the viewport
  });

  return (
    <Box
      id="portfolio"
      sx={{
        background: backgroundColor,
        color: fontColor,

        transition: "background-color 0.7s ease",
        // width: "80vw",
      }}
    >
      <div className="portfolioContainer">
        <div ref={ref}>
          {/* <h1 className="port-h1">Portfolio</h1> */}
          <Portfolio />

          {/* <ImageGallery /> */}
        </div>
      </div>
    </Box>
  );
};

export default PortfolioPage;

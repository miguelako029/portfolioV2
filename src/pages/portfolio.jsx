// import React from "react";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";
import ImageGallery from "../components/imageGallery";
import myWorks from "../components/projectGallery/portfolio";
// import image from "../assets/images/logo192.png";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { mode, backgroundColor, fontColor } = useColorMode();

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
            <div ref={ref}>
              <animated.div style={fadeInUp}>
                <h1 className="port-h1">Portfolio</h1>
                <myWorks />

                {/* <ImageGallery /> */}
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Portfolio;

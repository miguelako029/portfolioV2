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
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(30px)",
    },
    config: { duration: 1000 },
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
      <animated.div style={fadeInUp}>
        <div className="portfolioContainer">
          <div ref={ref}>
            <ImageGallery />
          </div>
        </div>
      </animated.div>
    </Box>
  );
};

export default PortfolioPage;

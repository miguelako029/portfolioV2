import React from "react";
import { Box } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";

const Hero = () => {
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
        marginTop: "-0px",
      }}
    >
      <div className="hero">
        <h1>MIGUEL LORENZO</h1>
        <h1>TIMUAT</h1>
        <h1>MILANEZ</h1>
      </div>
    </Box>
  );
};

export default Hero;

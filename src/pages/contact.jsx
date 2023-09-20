import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Tooltip,
} from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";

import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
  Email,
  Send,
} from "@mui/icons-material";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { mode, backgroundColor, fontColor, BorderColor } = useColorMode();

  // Define a CSS object for TextField based on the mode
  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        // borderColor: BorderColor,
      },
    },
    "& .MuiOutlinedInput-input": {
      color: fontColor,
      background: mode === "dark" ? "#333" : "#fff", // Change background color based on mode
    },
    "& .MuiInputLabel-root": {
      color: fontColor,
    },
    "&:hover": {
      "& .MuiOutlinedInput-input": {
        borderColor: mode === "light" ? "#fff" : "fff", // Change border color on hover
      },
    },
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
      className="pageSection"
      id="contact"
      sx={{
        background: backgroundColor,
        color: fontColor,
        minHeight: "100vh",
        paddingTop: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        transition: "background-color 0.7s ease",
      }}
    >
      <div className="pageSection" id="contact">
        <div className="heroContainer">
          <div className="labelContainer">
            <Container
              maxWidth="md"
              style={{ textAlign: "center", marginTop: "50px" }}
            >
              <div ref={ref}>
                <animated.div style={fadeInUp}>
                  <Typography variant="h3" gutterBottom>
                    Let's get connected
                  </Typography>
                  <form noValidate autoComplete="off">
                    {/* Apply the style to TextField */}
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      sx={textFieldStyle}
                    />
                    <Button
                      sx={{
                        background: backgroundColor,
                        color: fontColor,
                        border: "1px solid",
                        transition: "background-color 0.7s ease",
                      }}
                      className="send"
                      type="submit"
                      style={{ marginTop: "10px" }}
                    >
                      Send
                      <Send sx={{ fontSize: 20, margin: "0px 0px 0px 10px" }} />
                    </Button>
                    <div style={{ paddingTop: "200px" }}>
                      {/* Social media icons */}

                      <a
                        href="https://www.facebook.com/miguel.milanez.9/"
                        target="blank"
                      >
                        <Facebook id="contactIcon" sx={{ color: fontColor }} />
                      </a>
                      <a
                        href="https://twitter.com/MiguellMilanez"
                        target="blank"
                      >
                        <Twitter id="contactIcon" sx={{ color: fontColor }} />
                      </a>
                      <a
                        href="https://www.instagram.com/mmmiggyyy/"
                        target="blank"
                      >
                        <Instagram id="contactIcon" sx={{ color: fontColor }} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/miguel-lorenzo-mila%C3%B1ez-706482144/"
                        target="blank"
                      >
                        <LinkedIn id="contactIcon" sx={{ color: fontColor }} />
                      </a>
                      <a href="https://github.com/miguelako029#" target="blank">
                        <GitHub id="contactIcon" sx={{ color: fontColor }} />
                      </a>
                      <Tooltip title="miguellmilanez@gmail.com" placement="top">
                        <Email id="contactIcon" sx={{ color: fontColor }} />
                      </Tooltip>
                      <p className="copyright">
                        &copy; {new Date().getFullYear()} Miguel Milanez. All
                        rights reserved.
                      </p>
                    </div>
                  </form>
                </animated.div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Contact;

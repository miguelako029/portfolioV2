// import React from "react";

import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";

const Contact = () => {
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
      <div className="pageSection" id="contact">
        <div className="heroContainer">
          <div className="labelContainer">
            <Container
              maxWidth="md"
              style={{ textAlign: "center", marginTop: "50px" }}
            >
              <Typography variant="h3" gutterBottom>
                Let's get connected
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Submit
                </Button>
              </form>
            </Container>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Contact;

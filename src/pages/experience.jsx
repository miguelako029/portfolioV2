// import React from "react";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";
import Button from "@mui/material/Button";
import Racami from "../assets/images/racami.png";
import Strategist from "../assets/images/strategist.png";
import Indra from "../assets/images/indra.png";

import { BorderColor } from "@mui/icons-material";

const Experience = () => {
  const { mode, backgroundColor, fontColor, BorderColor } = useColorMode();

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
      <div className="pageSection" id="experience">
        <div className="heroContainer">
          <div className="labelContainer">
            <h1>Experience</h1>
          </div>
          <section class="layout">
            <div class="cardBox">
              <div
                class="card"
                sx={{ background: backgroundColor, color: fontColor }}
              >
                <div class="circled-number">1</div>
                <div class="years">2022 - 2023</div>
                <img class="card-image" src={Racami} alt="Card Image" />
                <Button
                  className="read-more"
                  sx={{
                    background: backgroundColor,
                    color: fontColor,
                    border: BorderColor,
                    transition: "background-color 0.7s ease",
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
            <div class="cardBox">
              <div class="card">
                <div class="circled-number">2</div>
                <div class="years">2022 - 2023</div>
                <img class="card-image" src={Strategist} alt="Card Image" />
                <Button
                  className="read-more"
                  sx={{
                    background: backgroundColor,
                    color: fontColor,
                    border: BorderColor,
                    transition: "background-color 0.7s ease",
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
            <div class="cardBox">
              <div class="card">
                <div class="circled-number">3</div>
                <div class="years">2022 - 2023</div>
                <img class="card-image" src={Indra} alt="Card Image" />
                <Button
                  className="read-more"
                  sx={{
                    background: backgroundColor,
                    color: fontColor,
                    border: BorderColor,
                    transition: "background-color 0.7s ease",
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Box>
  );
};

export default Experience;

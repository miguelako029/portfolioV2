// import React from "react";

import React, { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";
import Button from "@mui/material/Button";
import Racami from "../assets/images/racami.png";
import RacamiV2 from "../assets/images/racami500.png";

import Strategist from "../assets/images/strategist.png";
import StrategistV2 from "../assets/images/strategist500.png";

import Indra from "../assets/images/indra.png";
import IndraV2 from "../assets/images/indra500.png";

import CloseIcon from "@mui/icons-material/Close";

const Experience = () => {
  const {
    mode,
    backgroundColor,
    fontColor,
    BorderColor,
    backgroundColorModal,
    fontModal,
  } = useColorMode();

  const [openRacami, setOpenRacamiModal] = useState(false);
  const [openStrategist, setOpenStrategistModal] = useState(false);
  const [openIndra, setOpenIndraModal] = useState(false);

  const handleOpenRacami = () => {
    setOpenRacamiModal(true);
  };

  const handleCloseRacamiModal = () => {
    setOpenRacamiModal(false);
  };

  const handleOpenStrategist = () => {
    setOpenStrategistModal(true);
  };

  const handleCloseStrategistModal = () => {
    setOpenStrategistModal(false);
  };

  const handleOpenIndra = () => {
    setOpenIndraModal(true);
  };

  const handleCloseIndraModal = () => {
    setOpenIndraModal(false);
  };

  const style = {
    padding: "10px",
    overflow: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "auto",
    borderRadius: "15px",
    backgroundColor:
      mode === "dark" ? "rgba(34, 37, 42, 0.75)" : "rgba(233, 233, 233, 0.75)",
    color: mode === "dark" ? "#FFF" : "#333",
    willChange: "backdrop-filter",

    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
  };

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
                <div class="years">2017 - 2018</div>
                <img class="card-image" src={Racami} alt="Card Image" />
                <Button
                  className="read-more"
                  sx={{
                    background: backgroundColor,
                    color: fontColor,
                    border: BorderColor,
                    transition: "background-color 0.7s ease",
                  }}
                  onClick={handleOpenRacami}
                >
                  Read More
                </Button>
              </div>
            </div>
            <div class="cardBox">
              <div class="card">
                <div class="circled-number">2</div>
                <div class="years">2018 - 2019</div>
                <img class="card-image" src={Strategist} alt="Card Image" />
                <Button
                  className="read-more"
                  sx={{
                    background: backgroundColor,
                    color: fontColor,
                    border: BorderColor,
                    transition: "background-color 0.7s ease",
                  }}
                  onClick={handleOpenStrategist}
                >
                  Read More
                </Button>
              </div>
            </div>
            <div class="cardBox">
              <div class="card">
                <div class="circled-number">3</div>
                <div class="years">2019 - Present</div>
                <img class="card-image" src={Indra} alt="Card Image" />
                <Button
                  className="read-more"
                  sx={{
                    background: backgroundColor,
                    color: fontColor,
                    border: BorderColor,
                    transition: "background-color 0.7s ease",
                  }}
                  onClick={handleOpenIndra}
                >
                  Read More
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Modal
          open={openRacami}
          onClose={handleCloseRacamiModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <Fade in={open1}> */}
          <Box sx={style} id="aboutModal">
            <Button
              onClick={handleCloseRacamiModal}
              sx={{ position: "absolute", top: 10, right: 1 }}
            >
              <CloseIcon />
            </Button>

            <div
              class="modal-container"
              sx={{ backgroundColor: backgroundColorModal }}
            >
              <div class="modal-content">
                {/* <div class="modal-left"> */}
                <img src={RacamiV2} className="modal-image" />
                {/* </div> */}

                <div class="modal-right">
                  <div class="modal-title" sx={{ color: fontModal }}>
                    RACAMI LCC (TAGUIG CITY, NCR) <br />
                    <span class="position1">
                      SOFTWARE QUALITY ASSURANCE ANALYST{" "}
                    </span>
                  </div>
                  <div class="modal-classification">
                    <ul class="ul-bullet">
                      <li>
                        Assisting senior analysts with test planning and design.
                      </li>
                      <li>
                        Test execution, with recording and analysis of results.
                      </li>
                      <li>
                        Completing various types of tests and departmental
                        documentation in accordance with company and team
                        policy.
                      </li>
                    </ul>
                  </div>
                  <div class="modal-icons">
                    <span class="modal-icon">Icon 1</span>
                  </div>
                </div>
              </div>
            </div>
          </Box>
          {/* </Fade> */}
        </Modal>
        <Modal
          open={openStrategist}
          onClose={handleCloseStrategistModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <Fade in={open1}> */}
          <Box sx={style} id="aboutModal">
            <Button
              onClick={handleCloseStrategistModal}
              sx={{ position: "absolute", top: 10, right: 1 }}
            >
              <CloseIcon />
            </Button>

            <div
              class="modal-container"
              sx={{ backgroundColor: backgroundColorModal }}
            >
              <div class="modal-content">
                {/* <div class="modal-left"> */}
                <img src={StrategistV2} className="modal-image" />
                {/* </div> */}

                <div class="modal-right">
                  <div class="modal-title" sx={{ color: fontModal }}>
                    RACAMI LCC (TAGUIG CITY, NCR) <br />
                    <span class="position1">
                      SOFTWARE QUALITY ASSURANCE ANALYST{" "}
                    </span>
                  </div>
                  <div class="modal-classification">
                    <ul class="ul-bullet">
                      <li>Classification 1</li>
                      <li>Classification 2</li>
                      <li>Classification 3</li>
                    </ul>
                  </div>
                  <div class="modal-icons">
                    <span class="modal-icon">Icon 1</span>
                    <span class="modal-icon">Icon 2</span>
                    <span class="modal-icon">Icon 3</span>
                    <span class="modal-icon">Icon 4</span>
                    <span class="modal-icon">Icon 5</span>
                  </div>
                </div>
              </div>
            </div>
          </Box>
          {/* </Fade> */}
        </Modal>

        <Modal
          open={openIndra}
          onClose={handleCloseIndraModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <Fade in={open1}> */}
          <Box sx={style} id="aboutModal">
            <Button
              onClick={handleCloseIndraModal}
              sx={{ position: "absolute", top: 10, right: 1 }}
            >
              <CloseIcon />
            </Button>

            <div
              class="modal-container"
              sx={{ backgroundColor: backgroundColorModal }}
            >
              <div class="modal-content">
                {/* <div class="modal-left"> */}
                <img src={IndraV2} className="modal-image" />
                {/* </div> */}

                <div class="modal-right">
                  <div class="modal-title" sx={{ color: fontModal }}>
                    RACAMI LCC (TAGUIG CITY, NCR) <br />
                    <span class="position1">
                      SOFTWARE QUALITY ASSURANCE ANALYST{" "}
                    </span>
                  </div>
                  <div class="modal-classification">
                    <ul class="ul-bullet">
                      <li>Classification 1</li>
                      <li>Classification 2</li>
                      <li>Classification 3</li>
                    </ul>
                  </div>
                  <div class="modal-icons">
                    <span class="modal-icon">Icon 1</span>
                    <span class="modal-icon">Icon 2</span>
                    <span class="modal-icon">Icon 3</span>
                    <span class="modal-icon">Icon 4</span>
                    <span class="modal-icon">Icon 5</span>
                  </div>
                </div>
              </div>
            </div>
          </Box>
          {/* </Fade> */}
        </Modal>
      </div>
    </Box>
  );
};

export default Experience;

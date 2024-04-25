// import React from "react";

import React, { useState, useEffect } from "react";
import { Box, Modal, Typography, Tooltip } from "@mui/material";
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

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

// import { CloseIcon, Excel } from "@mui/icons-material";

import {
  SiMicrosoftexcel,
  SiGodaddy,
  SiWordpress,
  SiElementor,
  SiWoocommerce,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiIcloud,
  SiCpanel,
  SiDrupal,
  SiMicrosoftsharepoint,
  SiReact,
  SiNow,
  SiAmazonaws,
  SiMicrosoftsqlserver,
  SiPowerautomate,
} from "react-icons/si";

import { SlQuestion } from "react-icons/sl";

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
    top: "50%",
    left: "50%",

    width: "90%",
    height: "90%",
    borderRadius: "15px",
    backgroundColor: mode === "dark" ? "#1b1b1b" : "#e9e9e9",
    willChange: "backdrop-filter",
    padding: "10px",
    overflow: "auto",
    position: "absolute",

    transform: "translate(-50%, -50%)",

    backgroundColor:
      mode === "dark" ? "rgba(34, 37, 42, 0.75)" : "rgba(233, 233, 233, 0.75)",
    color: mode === "dark" ? "#FFF" : "#333",
    willChange: "backdrop-filter",

    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
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
      id="experience"
      sx={{
        background: backgroundColor,

        color: fontColor,
        display: "flex",

        transition: "background-color 0.7s ease",
      }}
    >
      <div ref={ref}>
        <animated.div style={fadeInUp}>
          <div className="pageSection">
            <div className="expContainer">
              <div className="labelContainer">
                <h1 className="sectionHeader">Experience</h1>
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
                  className="modal-container"
                  sx={{ backgroundColor: backgroundColorModal }}
                >
                  <div>
                    <img src={RacamiV2} className="modal-image" />
                  </div>
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
                          Assisting senior analysts with test planning and
                          design.
                        </li>
                        <li>
                          Test execution, with recording and analysis of
                          results.
                        </li>
                        <li>
                          Completing various types of tests and departmental
                          documentation in accordance with company and team
                          policy.
                        </li>
                      </ul>
                    </div>
                    <span class="position1">Technology used:</span>
                    <div class="modal-icons">
                      <Tooltip title="Microsoft Excel" placement="top">
                        <span className="modal-icon">
                          <SiMicrosoftexcel />
                        </span>
                      </Tooltip>
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
                  className="modal-container"
                  sx={{ backgroundColor: backgroundColorModal }}
                >
                  <div>
                    <img src={StrategistV2} className="modal-image" />
                  </div>
                  <div class="modal-right">
                    <div className="modal-title" sx={{ color: fontModal }}>
                      88SITES / STRATEGIST.PH (PASIG CITY, NCR) <br />
                      <span className="position1">WEB DEVELOPER </span>
                    </div>
                    <div class="modal-classification">
                      <ul className="ul-bullet">
                        <li>Develop UIs with JSP, JavaScript, HTML and CSS </li>
                        <li>
                          Meeting with clients to discuss website design and
                          function.
                        </li>
                        <li>Designing and building the website front-end.</li>
                        <li>Creating the website architecture.</li>
                        <li>
                          Designing and managing the website back-end including
                          database and server integration.
                        </li>
                        <li>Generating WordPress themes and plugins.</li>
                        <li>Conducting website performance tests.</li>
                        <li>Troubleshooting content issues.</li>
                        <li>Conducting WordPress training with the client.</li>
                        <li>Monitoring the performance of the live website.</li>
                      </ul>
                    </div>
                    <span class="position1">Technology used:</span>
                    <div className="modal-icons">
                      <Tooltip title="HTML5" placement="top">
                        <span className="modal-icon">
                          <SiHtml5 />
                        </span>
                      </Tooltip>
                      <Tooltip title="CSS3" placement="top">
                        <span className="modal-icon">
                          <SiCss3 />
                        </span>
                      </Tooltip>
                      <Tooltip title="JavaScript" placement="top">
                        <span className="modal-icon">
                          <SiJavascript />
                        </span>
                      </Tooltip>
                      <Tooltip title="WordPress" placement="top">
                        <span className="modal-icon">
                          <SiWordpress />
                        </span>
                      </Tooltip>
                      <Tooltip title="Elementor" placement="top">
                        <span className="modal-icon">
                          <SiElementor />
                        </span>
                      </Tooltip>
                      <Tooltip title="WooCommerce" placement="top">
                        <span className="modal-icon">
                          <SiWoocommerce />
                        </span>
                      </Tooltip>
                      <Tooltip title="GoDaddy" placement="top">
                        <span className="modal-icon">
                          <SiGodaddy />
                        </span>
                      </Tooltip>
                      <Tooltip title="ClouDNS" placement="top">
                        <span className="modal-icon">
                          <SiIcloud />
                        </span>
                      </Tooltip>
                      <Tooltip title="cPanel" placement="top">
                        <span className="modal-icon">
                          <SiCpanel />
                        </span>
                      </Tooltip>
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
                  <div>
                    <img src={IndraV2} className="modal-image" />
                  </div>
                  <div class="modal-right">
                    <div className="modal-title" sx={{ color: fontModal }}>
                      INDRA PHILIPPINES, INC. - MERALCO (PASIG CITY, NCR) <br />
                      <span className="position1">
                        Junior System Engineer (2019 - 2022)
                      </span>
                      <br />{" "}
                      <span className="position1">
                        System Engineer (Present)
                      </span>
                    </div>
                    <div className="modal-classification">
                      <ul className="ul-bullet">
                        <li>
                          Supporting day-to-day operations, following
                          established procedures.
                        </li>
                        <li>
                          Gathering user requirements for the MERALCO website.
                        </li>
                        <li>
                          Assisting in resolving incidents and deployments using
                          predefined processes.
                        </li>
                        <li>
                          Providing suggestions and enhancements for operational
                          tasks.
                        </li>
                        <li>24/7 on-call ERT support.</li>
                        <li>
                          Conducting investigations, analyses, and addressing
                          technical issues.
                        </li>
                        <li>Delivering technical and functional guidance.</li>
                        <li>
                          Developing automated workflows for maintenance
                          schedules.
                        </li>
                        <li>
                          Identifying and communicating risks and critical
                          points to the manager.
                        </li>
                        <li>Strictly adhering to production protocols.</li>
                        <li>
                          Independently designing and constructing modules.
                        </li>
                        <li>Supporting less experienced team members.</li>
                        <li>Providing user training.</li>
                        <li>
                          Participating in reviewing functional requirements.
                        </li>
                        <li>
                          Seeking input or decisions from the manager when
                          necessary.
                        </li>
                        {/* <li>Meeting established deadlines for tasks.</li>
                        <li>
                          Expanding technical and technological knowledge
                          proactively.
                        </li> */}
                        {/* <li>Becoming familiar with the work environment.</li> */}
                        <li>
                          Identifying and proposing improvements to work
                          methods.
                        </li>
                        <li>
                          Maintaining rigor in work, including data and
                          documentation.
                        </li>
                        {/* <li>
                          Demonstrating an interest in understanding work
                          processes and expected outcomes.
                        </li> */}
                      </ul>
                    </div>
                    <span className="position1">Technology used:</span>
                    <div className="modal-icons">
                      <Tooltip title="HTML5" placement="top">
                        <span className="modal-icon">
                          <SiHtml5 />
                        </span>
                      </Tooltip>
                      <Tooltip title="CSS3" placement="top">
                        <span className="modal-icon">
                          <SiCss3 />
                        </span>
                      </Tooltip>
                      <Tooltip title="JavaScript" placement="top">
                        <span className="modal-icon">
                          <SiJavascript />
                        </span>
                      </Tooltip>
                      <Tooltip title="Drupal" placement="top">
                        <span className="modal-icon">
                          <SiDrupal />
                        </span>
                      </Tooltip>
                      <Tooltip title="Microsoft SharePoint" placement="top">
                        <span className="modal-icon">
                          <SiMicrosoftsharepoint />
                        </span>
                      </Tooltip>
                      <Tooltip
                        title="Microsoft SharePoint Designer"
                        placement="top"
                      >
                        <span className="modal-icon">
                          <SlQuestion />
                        </span>
                      </Tooltip>
                      <Tooltip title="React" placement="top">
                        <span className="modal-icon">
                          <SiReact />
                        </span>
                      </Tooltip>
                      <Tooltip title="VFire" placement="top">
                        <span className="modal-icon">
                          <SlQuestion />
                        </span>
                      </Tooltip>
                      <Tooltip title="ServiceNow" placement="top">
                        <span className="modal-icon">
                          <SiNow />
                        </span>
                      </Tooltip>
                      <Tooltip title="Amazon AWS" placement="top">
                        <span className="modal-icon">
                          <SiAmazonaws />
                        </span>
                      </Tooltip>
                      <Tooltip title="Microsoft SQL Server" placement="top">
                        <span className="modal-icon">
                          <SiMicrosoftsqlserver />
                        </span>
                      </Tooltip>
                      <Tooltip title="Power Automate" placement="top">
                        <span className="modal-icon">
                          <SiPowerautomate />
                        </span>
                      </Tooltip>
                      <Tooltip title="UI Path " placement="top">
                        <span className="modal-icon">
                          <SlQuestion />
                        </span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </Box>
              {/* </Fade> */}
            </Modal>
          </div>
        </animated.div>
      </div>
    </Box>
  );
};

export default Experience;

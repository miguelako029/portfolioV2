// import React from "react";

import React, { useState } from "react";
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
        minHeight: "50vh",

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
                <img
                  src={StrategistV2}
                  className="modal-image"
                  // height="100%"
                />
                {/* </div> */}

                <div class="modal-right">
                  <div class="modal-title" sx={{ color: fontModal }}>
                    88SITES / STRATEGIST.PH (PASIG CITY, NCR) <br />
                    <span class="position1">WEB DEVELOPER </span>
                  </div>
                  <div class="modal-classification">
                    <ul class="ul-bullet">
                      <li>Develop UIs with JSP, JavaScript, HTML and CSS 1</li>
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
                    INDRA PHILIPPINES, INC. - MERALCO (PASIG CITY, NCR) <br />
                    <span class="position1">JUNIOR SYSTEM ENGINEER (2019 - 2022)</span>
                    <br /> <span class="position1">SYSTEM ENGINEER (Present)</span>
                  </div>
                  <div class="modal-classification">
                    <ul class="ul-bullet">
                      <li>Support BAU tasks with defined MOP.</li>
                      <li>
                        Interact with users to gather requirements for the
                        MERALCO website.
                      </li>
                      <li>
                        Provide support for incident resolution with defined
                        MOP.
                      </li>
                      <li>Support deployments with defined MOP.</li>
                      <li>Recommend and optimize operational tasks.</li>
                      <li>Provide 24/7 on-call ERT support.</li>
                      <li>Conduct investigations and analysis.</li>
                      <li>Resolve technical incidents, including bug fixes.</li>
                      <li>Offer technical and functional consulting.</li>
                      <li>
                        Develop automated flows for Meralco maintenance
                        schedules.
                      </li>
                      <li>
                        Identify and communicate risks and critical points to
                        the manager.
                      </li>
                      <li>Adhere strictly to production procedures.</li>
                      <li>
                        Design less complex modules autonomously and contribute
                        to complex ones.
                      </li>
                      <li>
                        Construct modules and support less experienced team
                        members.
                      </li>
                      <li>Provide user training.</li>
                      <li>Participate in reviewing functional requirements.</li>
                      <li>
                        Seek opinions or decisions from the manager when
                        necessary.
                      </li>
                      <li>Meet established deadlines for tasks.</li>
                      <li>Expand technical and technological knowledge.</li>
                      <li>Be familiar with the working environment.</li>
                      <li>
                        Pursue opportunities to deepen technological knowledge
                        proactively.
                      </li>
                      <li>
                        Show a proactive attitude for continual work
                        improvement.
                      </li>
                      <li>
                        Identify and propose improvements to work methods.
                      </li>
                      <li>
                        Maintain rigor in work, including data and
                        documentation.
                      </li>
                      <li>
                        Demonstrate an interest in understanding work processes
                        and expected outcomes.
                      </li>
                    </ul>
                  </div>
                  <span class="position1">Technology used:</span>
                  <div class="modal-icons">
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
            </div>
          </Box>
          {/* </Fade> */}
        </Modal>
      </div>
    </Box>
  );
};

export default Experience;

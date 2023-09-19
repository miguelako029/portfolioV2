// import React from "react";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";

import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import image1 from "../assets/images/364148860_7042763322419713_3717389514963905346_n.png";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...style, opacity: open ? 1 : 0 }}
      {...other}
    >
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const About = () => {
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
  const { mode, backgroundColor, fontColor } = useColorMode();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  useEffect(() => {
    if (open2) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [open2]);

  const style = {
    padding: "10px",
    overflow: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    borderRadius: "15px",
    backgroundColor: mode === "dark" ? "#1b1b1b" : "#e9e9e9",
    willChange: "backdrop-filter",
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
      <div className="pageSection" id="about">
        <div className="heroContainer">
          <div className="labelContainer">
            <div class="about-grid-container">
              <div class="profileImage">
                <div ref={ref}>
                  <animated.div style={fadeInUp}>
                    <img src={image1} width="55%" alt="Image 1" />
                  </animated.div>
                </div>
              </div>

              <div class="aboutDescription">
                <div ref={ref}>
                  <animated.div style={fadeInUp}>
                    <h1>Know me more!</h1>
                  </animated.div>
                </div>

                <div ref={ref}>
                  <animated.div style={fadeInUp}>
                    <p>
                      {" "}
                      Experienced Frontend Developer with a demonstrated history
                      of working in the information technology and services
                      industry. Skilled in Redmine, PHP, JavaScript, CMS,
                      Microsoft SharePoint, RPA(UiPath) and Project Management.
                    </p>
                    <div
                      className="btnGroup"
                      sx={{
                        background: backgroundColor,
                        color: fontColor,
                        transition: "background-color 0.7s ease",
                      }}
                    >
                      <Button
                        className="button"
                        sx={{
                          background: backgroundColor,
                          color: fontColor,
                          transition: "background-color 0.7s ease",
                        }}
                        onClick={handleOpen1}
                      >
                        Read More
                      </Button>
                      <Button
                        className="button"
                        sx={{
                          background: backgroundColor,
                          color: fontColor,
                          transition: "background-color 0.7s ease",
                        }}
                        onClick={handleOpen2}
                      >
                        My Skills
                      </Button>
                      <Button
                        className="button"
                        sx={{
                          background: backgroundColor,
                          color: fontColor,
                          transition: "background-color 0.7s ease",
                        }}
                        onClick={handleOpen3}
                      >
                        Completed Trainings
                      </Button>
                      <Button
                        className="button"
                        sx={{
                          background: backgroundColor,
                          color: fontColor,
                          transition: "background-color 0.7s ease",
                        }}
                        onClick={handleOpen4}
                      >
                        My Certificates
                      </Button>
                    </div>
                  </animated.div>
                </div>
              </div>

              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Fade in={open1}>
                  <Box sx={style} id="aboutModal">
                    <Button
                      onClick={handleClose1}
                      sx={{ position: "absolute", top: 10, right: 1 }}
                    >
                      <CloseIcon />
                    </Button>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <div className="time-line">
                        <ul class="my-list">
                          <li class="line-number">
                            <span className="bracket">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"name" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "Miguel Lorenzo T. Milañez"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"age" </span>
                            <span className="semicolons">: </span>
                            <span className="number">25</span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"birthDate" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">"09-29-1997"</span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"city" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">"San Juan City"</span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"contactNo" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "09989397900/09190601544"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"emailAddress" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "miguellmilanez@gmail.com"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"education" </span>
                            <span className="semicolons">: </span>

                            <span className="innerBracket">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">"school" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "Polytechnic University of the Philippines - San
                              Juan City"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">"degree" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">"Bachelor's"</span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">"major" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "Information Technology"
                            </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>

                            <span className="innerBracket">&#125;</span>
                          </li>
                          <li class="line-number">
                            <span className="bracket">&#125;</span>
                          </li>
                        </ul>
                      </div>
                    </Typography>
                  </Box>
                </Fade>
              </Modal>

              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Fade in={open2}>
                  <Box sx={style} id="aboutModal">
                    <Button
                      onClick={handleClose2}
                      sx={{ position: "absolute", top: 10, right: 1 }}
                    >
                      <CloseIcon />
                    </Button>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <div className="time-line">
                        <ul class="my-list">
                          <li class="line-number">
                            <span className="bracket">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"skills" </span>
                            <span className="semicolons">: </span>
                            <span className="innerBracket">&#91;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"category" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "Programming Languages"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"list" </span>
                            <span className="semicolons">: </span>
                            <span className="bracket">&#91;</span>
                            <span className="dataValue">
                              "Java"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "C++"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "C#"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">"PHP"</span>
                            <span className="bracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* web development*/}
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"category" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">"Web Development"</span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"list" </span>
                            <span className="semicolons">: </span>
                            <span className="bracket">&#91;</span>
                            <span className="dataValue">
                              "HTML"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "CSS"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "JavaScript"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "jQuery"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "AJAX"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "React"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "WordPress"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "Drupal"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "Vue"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "Bootstrap"<span className="commas">, </span>
                            </span>

                            <span className="dataValue">"Bootstrap"</span>
                            <span className="bracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* Design */}
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"category" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">"Design"</span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"list" </span>
                            <span className="semicolons">: </span>
                            <span className="bracket">&#91;</span>
                            <span className="dataValue">
                              "Adobe Photoshop"
                              <span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "Adobe Illustrator"
                              <span className="commas">, </span>
                            </span>

                            <span className="dataValue">"Dreamweaver"</span>
                            <span className="bracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* Data Analysis */}
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"category" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "Data Analysis/Data Management"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"list" </span>
                            <span className="semicolons">: </span>
                            <span className="bracket">&#91;</span>

                            <span className="dataValue">
                              "SQL"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">
                              "Excel"<span className="commas">, </span>
                            </span>
                            <span className="dataValue">"MySQL"</span>
                            <span className="bracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* Servers */}
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"category" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">"Servers"</span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"list" </span>
                            <span className="semicolons">: </span>
                            <span className="bracket">&#91;</span>
                            <span className="dataValue">
                              "AWS"<span className="commas">, </span>
                            </span>

                            <span className="dataValue">"WHM"</span>
                            <span className="bracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* Robotics Process Automation */}
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"category" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "Robotics Process Automation"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"list" </span>
                            <span className="semicolons">: </span>
                            <span className="bracket">&#91;</span>
                            <span className="dataValue">"UIPath"</span>

                            <span className="bracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* Microsoft Suites */}
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"category" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "Microsoft Suites"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"list" </span>
                            <span className="semicolons">: </span>
                            <span className="bracket">&#91;</span>
                            <span className="dataValue">
                              "SharePoint"<span className="commas">, </span>
                            </span>

                            <span className="dataValue">"PowerBI"</span>
                            <span className="bracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="innerBracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="bracket">&#125;</span>
                          </li>
                        </ul>
                      </div>
                    </Typography>
                  </Box>
                </Fade>
              </Modal>

              <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Fade in={open3}>
                  <Box sx={style} id="aboutModal">
                    <Button
                      onClick={handleClose3}
                      sx={{ position: "absolute", top: 0, right: 0 }}
                    >
                      <CloseIcon />
                    </Button>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <div className="time-line">
                        <ul class="my-list">
                          <li class="line-number">
                            <span className="bracket">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"trainings" </span>
                            <span className="semicolons">: </span>
                            <span className="innerBracket">&#91;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "BASIC ANGULAR TRAINING (24 HOURS)"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"location" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">
                              "11th Floor, Rockwell Business Center, Pasig City"
                            </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* mobile android */}

                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "MOBILE ANDROID APP (16 HOURS)"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"location" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">
                              "11th Floor, Rockwell Business Center, Pasig City"
                            </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>

                          {/* powerBi*/}
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "POWERBI TRAINING"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"location" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">
                              "4th Floor, Lopez Building, Meralco, Ortigas,
                              Pasig City"
                            </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* drupal */}
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "FULL INTRODUCTION DRUPAL 8"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"location" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"Online - Udemy"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* SNow */}
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "COMPLETE SERVICENOW SYSTEM ADMINISTRATOR COURSE"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"location" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"Online - Udemy"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* sharepoint */}
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "SHAREPOINT 2013 COMPLETE TRAINING"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"location" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"Online - Udemy"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                          </li>

                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="innerBracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="bracket">&#125;</span>
                          </li>
                        </ul>
                      </div>
                    </Typography>
                  </Box>
                </Fade>
              </Modal>

              <Modal
                open={open4}
                onClose={handleClose4}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Fade in={open4}>
                  <Box sx={style} id="aboutModal">
                    <Button
                      onClick={handleClose4}
                      sx={{ position: "absolute", top: 0, right: 0 }}
                    >
                      <CloseIcon />
                    </Button>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <div className="time-line">
                        <ul class="my-list">
                          <li class="line-number">
                            <span className="bracket">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="variable">"certificates" </span>
                            <span className="semicolons">: </span>
                            <span className="innerBracket">&#91;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "SCRUM FOUNDATION PROFESSIONAL CERTIFICATE"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"date" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"2021-03-23"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">
                              "certificationBody"{" "}
                            </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">"CertiProf"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* cybersec */}
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "CYBER SECURITY FOUNDATION - CSFPC**"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"date" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"2021-03-23"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">
                              "certificationBody"{" "}
                            </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"CertiProf"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* PMF */}
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "PROJECT MANAGEMENT FUNDAMENTALS"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"date" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"2021-09-19"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">
                              "certificationBody"{" "}
                            </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"MSTCONNECT"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>
                          {/* google tect-supp */}
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#123;</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"title" </span>
                            <span className="semicolons">: </span>
                            <span className="dataValue">
                              "GOOGLE - TECHNICAL SUPPORT FUNDAMENTALS"
                            </span>
                            <span className="commas">, </span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">"date" </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"2022-11-08"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">........</span>
                            <span className="variable">
                              "certificationBody"{" "}
                            </span>
                            <span className="semicolons">: </span>

                            <span className="dataValue">"Coursera"</span>
                          </li>
                          <li class="line-number">
                            <span className="dot">....</span>
                            <span className="variable">&#125;</span>
                            <span className="commas">, </span>
                          </li>

                          <li class="line-number">
                            <span className="dot">..</span>
                            <span className="innerBracket">&#93;</span>
                          </li>
                          <li class="line-number">
                            <span className="bracket">&#125;</span>
                          </li>
                        </ul>
                      </div>
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;

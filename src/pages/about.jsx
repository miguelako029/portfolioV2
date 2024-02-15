// import React from "react";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import "../styles/style.css";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";

import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import SwipeableViews from "react-swipeable-views";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import image1 from "../assets/images/MePhoto.png";

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

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
    document.body.classList.add("modal-overlay-hidden");
  };

  const handleClose2 = () => {
    setOpen2(false);
    document.body.classList.remove("modal-overlay-hidden");
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
    // padding: "10px",
    overflow: "auto",
    position: "absolute",

    // borderRadius: "15px",
    // backgroundColor: mode === "dark" ? "#1b1b1b" : "#e9e9e9",
    willChange: "backdrop-filter",
    // overflow: "hidden",
  };

  const card = (
    <React.Fragment>
      <CardContent>
        {/* <img src={image1} width="30%" alt="Image 1" /> */}

        <Typography variant="h5" component="div">
          Miguel Lorenzo T. Milanez
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Software Engineer
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const SkillsSection = ({ title, skills }) => (
    <div className="progLang">
      {title}
      <div>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            variant="outlined"
            sx={{ marginLeft: 0.3, marginBottom: 0.5, fontWeight: 100 }}
          />
        ))}
      </div>
    </div>
  );

  const cardSkills = (
    <CardContent>
      <div className="skillCard">Skills</div>

      <SkillsSection
        title="Programming Language"
        skills={["Java", "C++", "C#", "PHP"]}
      />

      <SkillsSection
        title="Web Development"
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
          "AJAX",
          "React",
          "WordPress",
          "Drupal",
          "Vue",
          "Bootstrap",
        ]}
      />

      <SkillsSection
        title="Design"
        skills={["Adobe Photoshop", "Adobe Illustrator", "Dreamweaver"]}
      />

      <SkillsSection title="Servers" skills={["AWS", "WHM"]} />

      <SkillsSection title="Robotics Process Automation" skills={["UIPath"]} />

      <SkillsSection
        title="Microsoft Suites"
        skills={["SharePoint", "PowerBI"]}
      />
    </CardContent>
  );

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <Box
      className="pageSection"
      id="about"
      sx={{
        background: backgroundColor,
        color: fontColor,
        minHeight: "70vh",
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        transition: "background-color 0.7s ease",
      }}
    >
      <div className="aboutSection" id="about">
        <div className="heroContainer">
          <div className="labelContainer">
            <div class="about-grid-container">
              <div class="profileImage">
                <div ref={ref}>
                  <animated.div style={fadeInUp}>
                    <img src={image1} width="60%" alt="Image 1" />
                  </animated.div>
                </div>
              </div>

              <div class="aboutDescription">
                <div ref={ref}>
                  <animated.div style={fadeInUp}>
                    <h1>Miguel Lorenzo Milañez</h1>
                  </animated.div>
                </div>

                <div ref={ref}>
                  <animated.div style={fadeInUp}>
                    <p>
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
                        Read More <ArrowRightAltIcon />
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
                  <Box sx={style} id="aboutModal" className="modal1">
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
                      <div style={{ display: "flex" }}>
                        <div className="personalInfo">
                          <div>
                            <div className="meImage">
                              {" "}
                              <img src={image1} width="30%" alt="Image 1" />
                            </div>

                            {/* <Card variant="outlined">{cardSkills}</Card> */}
                          </div>
                        </div>

                        <div className="otherDetails">
                          <AppBar
                            position="static"
                            className="modalTab"
                            sx={{
                              // background: "none",
                              color: fontColor,
                              // boxShadow: "none",
                              // borderBottom: "1px solid #000",
                            }}
                          >
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              indicatorColor="secondary"
                              textColor="inherit"
                              variant="fullWidth"
                              aria-label="full width tabs example"
                            >
                              <Tab
                                label="Personal Information"
                                {...a11yProps(0)}
                              />

                              <Tab label="Trainings" {...a11yProps(1)} />
                              <Tab label="Certificates" {...a11yProps(2)} />
                            </Tabs>
                          </AppBar>

                          <SwipeableViews
                            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                          >
                            <TabPanel
                              value={value}
                              index={0}
                              dir={theme.direction}
                            >
                              <Card variant="outlined">{card}</Card>

                              <Card variant="outlined">{cardSkills}</Card>
                              <div>
                                <h2>Personal Information:</h2>
                                <ul>
                                  <li>Name: Miguel Lorenzo T. Milañez</li>
                                  <li>Age: 25</li>
                                  <li>Birth Date: 09-29-1997</li>
                                  <li>City: San Juan City</li>
                                </ul>
                                <h2>Contact Information:</h2>
                                <ul>
                                  <li>Contact No: 09989397900/09190601544</li>
                                  <li>
                                    Email Address: miguellmilanez@gmail.com
                                  </li>
                                </ul>

                                <h2>Education Information:</h2>
                                <ul>
                                  <li>
                                    School: Polytechnic University of the
                                    Philippines - San Juan City
                                  </li>
                                  <li>Degree: Bachelor's</li>
                                  <li>Major: Information Technology</li>
                                </ul>
                              </div>
                            </TabPanel>

                            <TabPanel
                              value={value}
                              index={1}
                              dir={theme.direction}
                            >
                              <div>
                                <h2>Training:</h2>
                                <ul>
                                  <li>
                                    BASIC ANGULAR TRAINING (24 HOURS)
                                    <br />
                                    Location: 11th Floor, Rockwell Business
                                    Center, Pasig City
                                  </li>
                                  <li>
                                    MOBILE ANDROID APP (16 HOURS)
                                    <br />
                                    Location: 11th Floor, Rockwell Business
                                    Center, Pasig City
                                  </li>
                                  <li>
                                    POWERBI TRAINING
                                    <br />
                                    Location: 4th Floor, Lopez Building,
                                    Meralco, Ortigas, Pasig City
                                  </li>
                                  <li>
                                    FULL INTRODUCTION DRUPAL 8<br />
                                    Location: Online - Udemy
                                  </li>
                                  <li>
                                    COMPLETE SERVICENOW SYSTEM ADMINISTRATOR
                                    COURSE
                                    <br />
                                    Location: Online - Udemy
                                  </li>
                                  <li>
                                    SHAREPOINT 2013 COMPLETE TRAINING
                                    <br />
                                    Location: Online - Udemy
                                  </li>
                                </ul>
                              </div>
                            </TabPanel>
                            <TabPanel
                              value={value}
                              index={2}
                              dir={theme.direction}
                            >
                              {" "}
                              <div>
                                <h2>Certificates:</h2>
                                <ul>
                                  <li>
                                    SCRUM FOUNDATION PROFESSIONAL CERTIFICATE
                                    <br />
                                    Date: 2021-03-23
                                    <br />
                                    Certification Body: CertiProf
                                  </li>
                                  <li>
                                    CYBER SECURITY FOUNDATION - CSFPC**
                                    <br />
                                    Date: 2021-03-23
                                    <br />
                                    Certification Body: CertiProf
                                  </li>
                                  <li>
                                    PROJECT MANAGEMENT FUNDAMENTALS
                                    <br />
                                    Date: 2021-09-19
                                    <br />
                                    Certification Body: MSTCONNECT
                                  </li>
                                  <li>
                                    GOOGLE - TECHNICAL SUPPORT FUNDAMENTALS
                                    <br />
                                    Date: 2022-11-08
                                    <br />
                                    Certification Body: Coursera
                                  </li>
                                </ul>
                              </div>
                            </TabPanel>
                          </SwipeableViews>
                        </div>
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

// Personal Information:
// - Name: Miguel Lorenzo T. Milañez
// - Age: 25
// - Birth Date: 09-29-1997
// - City: San Juan City

// Contact Information:
// - Contact No: 09989397900/09190601544
// - Email Address: miguellmilanez@gmail.com

// Education Information:
// - School: Polytechnic University of the Philippines - San Juan City
// - Degree: Bachelor's
// - Major: Information Technology

// Skills:
//   - Category: Programming Languages
//     List:
//       - Java
//       - C++
//       - C#
//       - PHP

//   - Category: Web Development
//     List:
//       - HTML
//       - CSS
//       - JavaScript
//       - jQuery
//       - AJAX
//       - React
//       - WordPress
//       - Drupal
//       - Vue
//       - Bootstrap

//   - Category: Design
//     List:
//       - Adobe Photoshop
//       - Adobe Illustrator
//       - Dreamweaver

//   - Category: Data Analysis/Data Management
//     List:
//       - SQL
//       - Excel
//       - MySQL

//   - Category: Servers
//     List:
//       - AWS
//       - WHM

//   - Category: Robotics Process Automation
//     List:
//       - UIPath

//   - Category: Microsoft Suites
//     List:
//       - SharePoint
//       - PowerBI

// Training: BASIC ANGULAR TRAINING (24 HOURS)
// Location: 11th Floor, Rockwell Business Center, Pasig City

// Training: MOBILE ANDROID APP (16 HOURS)
// Location: 11th Floor, Rockwell Business Center, Pasig City

// Training: POWERBI TRAINING
// Location: 4th Floor, Lopez Building, Meralco, Ortigas, Pasig City

// Training: FULL INTRODUCTION DRUPAL 8
// Location: Online - Udemy

// Training: COMPLETE SERVICENOW SYSTEM ADMINISTRATOR COURSE
// Location: Online - Udemy

// Training: SHAREPOINT 2013 COMPLETE TRAINING
// Location: Online - Udemy

// Certificate: SCRUM FOUNDATION PROFESSIONAL CERTIFICATE
// Date: 2021-03-23
// Certification Body: CertiProf

// Certificate: CYBER SECURITY FOUNDATION - CSFPC**
// Date: 2021-03-23
// Certification Body: CertiProf

// Certificate: PROJECT MANAGEMENT FUNDAMENTALS
// Date: 2021-09-19
// Certification Body: MSTCONNECT

// Certificate: GOOGLE - TECHNICAL SUPPORT FUNDAMENTALS
// Date: 2022-11-08
// Certification Body: Coursera

//  <Modal
// open={open2}
// onClose={handleClose2}
// aria-labelledby="modal-modal-title"
// aria-describedby="modal-modal-description"
// >
// <Fade in={open2}>
//   <Box sx={style} id="aboutModal">
//     <Button
//       onClick={handleClose2}
//       sx={{ position: "absolute", top: 10, right: 1 }}
//     >
//       <CloseIcon />
//     </Button>
//     <Typography
//       id="modal-modal-title"
//       variant="h6"
//       component="h2"
//     >
//       <div className="time-line">
//         <ul class="my-list">
//           <li class="line-number">
//             <span className="bracket">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">..</span>
//             <span className="variable">"skills" </span>
//             <span className="semicolons">: </span>
//             <span className="innerBracket">&#91;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"category" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "Programming Languages"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"list" </span>
//             <span className="semicolons">: </span>
//             <span className="bracket">&#91;</span>
//             <span className="dataValue">
//               "Java"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "C++"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "C#"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">"PHP"</span>
//             <span className="bracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"category" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">"Web Development"</span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"list" </span>
//             <span className="semicolons">: </span>
//             <span className="bracket">&#91;</span>
//             <span className="dataValue">
//               "HTML"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "CSS"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "JavaScript"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "jQuery"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "AJAX"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "React"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "WordPress"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "Drupal"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "Vue"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "Bootstrap"<span className="commas">, </span>
//             </span>

//             <span className="dataValue">"Bootstrap"</span>
//             <span className="bracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"category" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">"Design"</span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"list" </span>
//             <span className="semicolons">: </span>
//             <span className="bracket">&#91;</span>
//             <span className="dataValue">
//               "Adobe Photoshop"
//               <span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "Adobe Illustrator"
//               <span className="commas">, </span>
//             </span>

//             <span className="dataValue">"Dreamweaver"</span>
//             <span className="bracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"category" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "Data Analysis/Data Management"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"list" </span>
//             <span className="semicolons">: </span>
//             <span className="bracket">&#91;</span>

//             <span className="dataValue">
//               "SQL"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">
//               "Excel"<span className="commas">, </span>
//             </span>
//             <span className="dataValue">"MySQL"</span>
//             <span className="bracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"category" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">"Servers"</span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"list" </span>
//             <span className="semicolons">: </span>
//             <span className="bracket">&#91;</span>
//             <span className="dataValue">
//               "AWS"<span className="commas">, </span>
//             </span>

//             <span className="dataValue">"WHM"</span>
//             <span className="bracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"category" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "Robotics Process Automation"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"list" </span>
//             <span className="semicolons">: </span>
//             <span className="bracket">&#91;</span>
//             <span className="dataValue">"UIPath"</span>

//             <span className="bracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"category" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "Microsoft Suites"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"list" </span>
//             <span className="semicolons">: </span>
//             <span className="bracket">&#91;</span>
//             <span className="dataValue">
//               "SharePoint"<span className="commas">, </span>
//             </span>

//             <span className="dataValue">"PowerBI"</span>
//             <span className="bracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">..</span>
//             <span className="innerBracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="bracket">&#125;</span>
//           </li>
//         </ul>
//       </div>
//     </Typography>
//   </Box>
// </Fade>
// </Modal>

// <Modal
// open={open3}
// onClose={handleClose3}
// aria-labelledby="modal-modal-title"
// aria-describedby="modal-modal-description"
// >
// <Fade in={open3}>
//   <Box sx={style} id="aboutModal">
//     <Button
//       onClick={handleClose3}
//       sx={{ position: "absolute", top: 0, right: 0 }}
//     >
//       <CloseIcon />
//     </Button>
//     <Typography
//       id="modal-modal-title"
//       variant="h6"
//       component="h2"
//     >
//       <div className="time-line">
//         <ul class="my-list">
//           <li class="line-number">
//             <span className="bracket">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">..</span>
//             <span className="variable">"trainings" </span>
//             <span className="semicolons">: </span>
//             <span className="innerBracket">&#91;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "BASIC ANGULAR TRAINING (24 HOURS)"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"location" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">
//               "11th Floor, Rockwell Business Center, Pasig City"
//             </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "MOBILE ANDROID APP (16 HOURS)"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"location" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">
//               "11th Floor, Rockwell Business Center, Pasig City"
//             </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "POWERBI TRAINING"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"location" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">
//               "4th Floor, Lopez Building, Meralco, Ortigas,
//               Pasig City"
//             </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "FULL INTRODUCTION DRUPAL 8"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"location" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"Online - Udemy"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "COMPLETE SERVICENOW SYSTEM ADMINISTRATOR COURSE"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"location" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"Online - Udemy"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "SHAREPOINT 2013 COMPLETE TRAINING"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"location" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"Online - Udemy"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//           </li>

//           <li class="line-number">
//             <span className="dot">..</span>
//             <span className="innerBracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="bracket">&#125;</span>
//           </li>
//         </ul>
//       </div>
//     </Typography>
//   </Box>
// </Fade>
// </Modal>

// <Modal
// open={open4}
// onClose={handleClose4}
// aria-labelledby="modal-modal-title"
// aria-describedby="modal-modal-description"
// >
// <Fade in={open4}>
//   <Box sx={style} id="aboutModal">
//     <Button
//       onClick={handleClose4}
//       sx={{ position: "absolute", top: 0, right: 0 }}
//     >
//       <CloseIcon />
//     </Button>
//     <Typography
//       id="modal-modal-title"
//       variant="h6"
//       component="h2"
//     >
//       <div className="time-line">
//         <ul class="my-list">
//           <li class="line-number">
//             <span className="bracket">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">..</span>
//             <span className="variable">"certificates" </span>
//             <span className="semicolons">: </span>
//             <span className="innerBracket">&#91;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "SCRUM FOUNDATION PROFESSIONAL CERTIFICATE"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"date" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"2021-03-23"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">
//               "certificationBody"{" "}
//             </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">"CertiProf"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "CYBER SECURITY FOUNDATION - CSFPC**"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"date" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"2021-03-23"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">
//               "certificationBody"{" "}
//             </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"CertiProf"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "PROJECT MANAGEMENT FUNDAMENTALS"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"date" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"2021-09-19"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">
//               "certificationBody"{" "}
//             </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"MSTCONNECT"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#123;</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"title" </span>
//             <span className="semicolons">: </span>
//             <span className="dataValue">
//               "GOOGLE - TECHNICAL SUPPORT FUNDAMENTALS"
//             </span>
//             <span className="commas">, </span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">"date" </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"2022-11-08"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">........</span>
//             <span className="variable">
//               "certificationBody"{" "}
//             </span>
//             <span className="semicolons">: </span>

//             <span className="dataValue">"Coursera"</span>
//           </li>
//           <li class="line-number">
//             <span className="dot">....</span>
//             <span className="variable">&#125;</span>
//             <span className="commas">, </span>
//           </li>

//           <li class="line-number">
//             <span className="dot">..</span>
//             <span className="innerBracket">&#93;</span>
//           </li>
//           <li class="line-number">
//             <span className="bracket">&#125;</span>
//           </li>
//         </ul>
//       </div>
//     </Typography>
//   </Box>
// </Fade>
// </Modal>

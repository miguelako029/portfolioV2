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
import CardMedia from "@mui/material/CardMedia";

import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { useSpring, animated, config } from "react-spring";
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
import indra from "../assets/images/indra.png";
import drupalImage from "../assets/images/udemy_Drupal.png";
import serviceNow from "../assets/images/udemy_ServiceNow.png";
import sharepoint from "../assets/images/udemy_Sharepoint.png";
import noImage from "../assets/images/noImage.jpg";
import scrumImage from "../assets/images/scrum.png";
import cyberSec from "../assets/images/cyberSec.png";
import pmf from "../assets/images/pmf.png";
import googleTech from "../assets/images/google.png";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    duration, // New prop for duration time
    ...other
  } = props;

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    config: { duration: 70 }, // Specify duration time
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
    <animated.div ref={ref} style={style} {...other}>
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
  duration: PropTypes.number, // PropType for duration time
};

Fade.defaultProps = {
  duration: 1300, // Default duration time (in milliseconds)
  delay: 2000,
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
      transform: inView ? "translateY(0)" : "translateY(100px)", // Animate translateY when in view
    },
    config: {
      durations: 15000,
    },
  });
  const { mode, backgroundColor, fontColor } = useColorMode();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);

  const handleOpenNoImage = () => {
    setOpenModal(true);
  };

  const handleCloseNoImage = () => {
    setOpenModal(false);
  };

  const handleOpenDrupal = () => {
    setOpenModal1(true);
  };

  const handleCloseDrupal = () => {
    setOpenModal1(false);
  };

  const handleOpenServiceNow = () => {
    setOpenModal2(true);
  };

  const handleCloseServiceNow = () => {
    setOpenModal2(false);
  };

  const handleOpenSharepoint = () => {
    setOpenModal3(true);
  };

  const handleCloseSharepoint = () => {
    setOpenModal3(false);
  };
  const handleOpenScrum = () => {
    setOpenModal4(true);
  };

  const handleCloseScrum = () => {
    setOpenModal4(false);
  };

  const handleOpenCyber = () => {
    setOpenModal5(true);
  };

  const handleCloseCyber = () => {
    setOpenModal5(false);
  };

  const handleOpenPmf = () => {
    setOpenModal6(true);
  };

  const handleClosePmf = () => {
    setOpenModal6(false);
  };

  const handleOpenGoogle = () => {
    setOpenModal7(true);
  };

  const handleCloseGoogle = () => {
    setOpenModal7(false);
  };

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
    // p: 4,
  };

  const card = (
    <div className="wrapper">
      <CardContent>
        <Typography variant="body2">
          <strong>Age:</strong> 25 <br />
          <strong>Birth Date:</strong> September 29. 1997 <br />
          <strong>City:</strong> San Juan City
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2">
          <strong>Contact No:</strong> 09989397900/09190601544 <br />
          <strong>Email Address:</strong> miguellmilanez@gmail.com
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2">
          <strong>School:</strong> Polytechnic University of the Philippines -
          San Juan City <br />
          <strong>Degree:</strong> Bachelor Degree <br />
          <strong>Major:</strong> Information Technology
        </Typography>
      </CardContent>
    </div>
  );

  const SkillsSection = ({ title, skills }) => (
    <div className="progLang">
      {title}
      <div>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            // variant="outlined"
            sx={{ marginLeft: 0.3, marginBottom: 0.5, fontWeight: 100 }}
          />
        ))}
      </div>
    </div>
  );

  const cardSkills = (
    <CardContent>
      <div className="skillCard">
        <strong>Skills</strong>
      </div>

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
        title="Programming Language"
        skills={["Java", "C++", "C#", "PHP"]}
      />

      <SkillsSection
        title="Design"
        skills={["Adobe Photoshop", "Adobe Illustrator", "Dreamweaver"]}
      />

      <SkillsSection title="Servers" skills={["AWS", "WHM"]} />
      <SkillsSection
        title="Microsoft Suites"
        skills={["SharePoint", "PowerBI"]}
      />

      <SkillsSection title="Robotics Process Automation" skills={["UIPath"]} />
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

  const trainings = [
    {
      title: "BASIC ANGULAR TRAINING (24 HOURS)",
      location: "11th Floor, Rockwell Business Center, Pasig City",
      image: indra,
      modal: handleOpenNoImage,
    },
    {
      title: "MOBILE ANDROID APP (16 HOURS)",
      location: "11th Floor, Rockwell Business Center, Pasig City",
      image: indra,
      modal: handleOpenNoImage,
    },
    {
      title: "POWERBI TRAINING",
      location: "4th Floor, Lopez Building, Meralco, Ortigas, Pasig City",
      image: indra,
      modal: handleOpenNoImage,
    },
    {
      title: "FULL INTRODUCTION DRUPAL 8",
      location: "Online - Udemy",
      image: drupalImage,
      modal: handleOpenDrupal,
    },
    {
      title: "COMPLETE SERVICENOW SYSTEM ADMINISTRATOR COURSE",
      location: "Online - Udemy",
      image: serviceNow,
      modal: handleOpenServiceNow,
    },
    {
      title: "SHAREPOINT 2013 COMPLETE TRAINING",
      location: "Online - Udemy",
      image: sharepoint,
      modal: handleOpenSharepoint,
    },
    {
      title: "PROJECT MANAGEMENT FUNDAMENTALS",

      location: "Online - MSTCONNECT",
      image: pmf,
      modal: handleOpenPmf,
    },
  ];

  const certification = [
    {
      title: "SCRUM FOUNDATION PROFESSIONAL CERTIFICATE",
      date: "2021-03-23",
      certificationBody: "CertiProf",
      image: scrumImage,
      modal: handleOpenScrum,
    },
    {
      title: "CYBER SECURITY FOUNDATION - CSFPC**",
      date: "2021-03-23",
      certificationBody: "CertiProf",
      image: cyberSec,
      modal: handleOpenCyber,
    },

    {
      title: "GOOGLE - TECHNICAL SUPPORT FUNDAMENTALS",
      date: "2022-11-08",
      certificationBody: "Coursera",
      image: googleTech,
      modal: handleOpenGoogle,
    },
  ];

  return (
    <Box
      className="pageSection"
      id="about"
      sx={{
        background: backgroundColor,
        color: fontColor,
        minHeight: "75vh",
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        transition: "background-color 0.7s ease",
      }}
    >
      <div className="aboutSection" id="about">
        {/* <div class="about-grid-container"> */}
        {/* <div className="wrapperAbout"> */}
        <div class="aboutMe">
          <div ref={ref}>
            <animated.div style={fadeInUp}>
              <h1>Miguel Lorenzo Milañez</h1>
            </animated.div>

            <animated.div style={fadeInUp}>
              <p className="aboutDetails">
                Welcome to my personal website! I'm Miguel Lorenzo T. Milañez, a
                passionate Software Engineer with a focus on web development and
                a knack for problem-solving. I'm passionate about crafting
                engaging web experiences and solving complex problems through
                innovative solutions. Feel free to explore my profile.
              </p>
            </animated.div>
            <div ref={ref}>
              <animated.div style={fadeInUp}>
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
        </div>
        {/* </div> */}
        {/* <div class="profileImage">
            <img src={image1} width="50%" alt="Image 1" />
          </div> */}
        {/* </div> */}

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
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <div style={{ display: "flex" }}>
                  <div className="personalInfo">
                    <div>
                      <div className="meImage"></div>
                    </div>
                  </div>

                  <div className="otherDetails">
                    <SwipeableViews
                      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                      index={value}
                      onChangeIndex={handleChangeIndex}
                    >
                      <TabPanel
                        value={value}
                        index={0}
                        dir={theme.direction}
                        className="fixed-panel"
                      >
                        <div className="tab-content"></div>
                        <Typography variant="h4" component="div">
                          Miguel Lorenzo T. Milanez
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Software Engineer
                        </Typography>
                        <div>{card}</div>

                        <div>{cardSkills}</div>
                      </TabPanel>

                      <TabPanel
                        value={value}
                        index={1}
                        dir={theme.direction}
                        className="fixed-panel"
                      >
                        <div className="tab-content">
                          <div className="wrapper">
                            {trainings.map((training, index) => (
                              <Card key={index} sx={{ maxWidth: 345 }}>
                                <CardMedia
                                  component="img"
                                  height="140"
                                  image={training.image} // Assuming indra is defined elsewhere
                                  sx={{ background: "000" }}
                                  alt="green iguana"
                                />
                                <CardContent>
                                  <Typography
                                    gutterBottom
                                    variant="h7"
                                    component="div"
                                  >
                                    {training.title.length > 25
                                      ? `${training.title.substring(0, 25)}...`
                                      : training.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    Location: {training.location}
                                  </Typography>
                                  <Button
                                    variant="outlined"
                                    onClick={training.modal}
                                    sx={{ marginTop: 5 }}
                                  >
                                    View Image
                                  </Button>
                                </CardContent>
                              </Card>
                            ))}

                            <Modal
                              open={openModal}
                              onClose={handleCloseNoImage}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className="trainingImage">
                                <img
                                  src={noImage}
                                  alt="Training"
                                  className="trainingImage"
                                />
                              </Box>
                            </Modal>

                            <Modal
                              open={openModal1}
                              onClose={handleCloseDrupal}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className="trainingImage">
                                <img
                                  src={drupalImage}
                                  alt="Training"
                                  className="trainingImage"
                                />
                              </Box>
                            </Modal>
                            <Modal
                              open={openModal2}
                              onClose={handleCloseServiceNow}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className="trainingImage">
                                <img
                                  src={serviceNow}
                                  alt="Training"
                                  className="trainingImage"
                                />
                              </Box>
                            </Modal>
                            <Modal
                              open={openModal3}
                              onClose={handleCloseSharepoint}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className="trainingImage">
                                <img
                                  src={sharepoint}
                                  alt="Training"
                                  className="trainingImage"
                                />
                              </Box>
                            </Modal>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel
                        value={value}
                        index={2}
                        dir={theme.direction}
                        className="fixed-panel"
                      >
                        <div className="tab-content">
                          <div className="wrapper">
                            {certification.map((certification, index) => (
                              <Card key={index} sx={{ maxWidth: 345 }}>
                                <CardMedia
                                  component="img"
                                  height="140"
                                  image={certification.image} // Assuming indra is defined elsewhere
                                  sx={{ background: "000" }}
                                  alt="green iguana"
                                />
                                <CardContent>
                                  <Typography
                                    gutterBottom
                                    variant="h7"
                                    component="div"
                                  >
                                    {certification.title.length > 25
                                      ? `${certification.title.substring(
                                          0,
                                          25
                                        )}...`
                                      : certification.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    Location: {certification.location}
                                  </Typography>
                                  <Button
                                    variant="outlined"
                                    onClick={certification.modal}
                                    sx={{ marginTop: 5 }}
                                  >
                                    View Image
                                  </Button>
                                </CardContent>
                              </Card>
                            ))}
                            <Modal
                              open={openModal4}
                              onClose={handleCloseScrum}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className="trainingImage">
                                <img
                                  src={scrumImage}
                                  alt="Training"
                                  className="trainingImage"
                                />
                              </Box>
                            </Modal>

                            <Modal
                              open={openModal5}
                              onClose={handleCloseCyber}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className="trainingImage">
                                <img
                                  src={cyberSec}
                                  alt="Training"
                                  className="trainingImage"
                                />
                              </Box>
                            </Modal>
                            <Modal
                              open={openModal6}
                              onClose={handleClosePmf}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className="trainingImage">
                                <img
                                  src={pmf}
                                  alt="Training"
                                  className="trainingImage"
                                />
                              </Box>
                            </Modal>
                            <Modal
                              open={openModal7}
                              onClose={handleCloseGoogle}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className="trainingImage">
                                <img
                                  src={googleTech}
                                  alt="Training"
                                  className="trainingImage"
                                />
                              </Box>
                            </Modal>
                          </div>
                        </div>
                      </TabPanel>
                    </SwipeableViews>
                    <AppBar position="static" className="modalTab">
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        sx={{
                          // background: backgroundColor,
                          color: mode === "dark" ? "#000" : "#000",

                          // boxShadow: "none",
                          // borderBottom: "1px solid #000",
                        }}
                      >
                        <Tab label="Personal Information" {...a11yProps(0)} />
                        <Tab label="Trainings" {...a11yProps(1)} />
                        <Tab label="Certificates" {...a11yProps(2)} />
                      </Tabs>
                    </AppBar>
                  </div>
                </div>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </Box>
  );
};

export default About;

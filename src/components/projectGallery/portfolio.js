import React, { useState } from "react";
import { useColorMode } from "../../assets/script/DarkModeContext"; // Update the path

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import projects from "../data/projects.json";
import hotJobs from "../../assets/images/web1.png";
import vitalOne from "../../assets/images/web4.png";
import harana from "../../assets/images/web3.png";
import campAllen from "../../assets/images/web2.png";

const images = { hotJobs, vitalOne, harana, campAllen };

function PortfolioTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="PortfolioTabPanel"
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

PortfolioTabPanel.propTypes = {
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

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const { mode, backgroundColor, fontColor, borderColor } = useColorMode(); // Update variable names

  return (
    <Box className="containers">
      <Box className="content">
        <AppBar
          position="static"
          className="tabContainer"
          sx={{ color: fontColor, marginLeft: "auto", marginBottom: "30px" }} // Utilize fontColor here
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                background: "linear-gradient(105deg, #0f9ef1, #f88bd9)", // Customize the indicator color
                height: 4, // Customize the height of the indicator
              },
            }}
          >
            {projects.map((project, index) => (
              <Tab
                label={project.title}
                {...a11yProps(index)}
                key={index}
                sx={{
                  // color: value === index ? "" : "inherit",
                  fontWeight: value === index ? "bold" : "normal",
                }}
              />
            ))}
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={"x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {projects.map((project, index) => (
            <PortfolioTabPanel value={value} index={index} key={index}>
              <div className="ProjWrapper">
                <div className="projectDetails">
                  <div className="projectTitle">{project.title}</div>
                  <div className="projectDesc">{project.description}</div>
                  <div className="projectButton">
                    <Button
                      sx={{ color: fontColor, background: backgroundColor }}
                      href={project.link}
                      target="_blank"
                    >
                      <span className="btnText">
                        {project.buttonText} <ArrowRightAltIcon />
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="siteImage">
                  <img
                    src={images[project.image]}
                    alt={project.alt}
                    width={"100%"}
                  />
                </div>
              </div>
            </PortfolioTabPanel>
          ))}
        </SwipeableViews>
      </Box>
    </Box>
  );
}

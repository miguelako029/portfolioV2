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

import hotJobs from "../../assets/images/web1.png";
import vitalOne from "../../assets/images/web4.png";
import harana from "../../assets/images/web3.png";
import campAllen from "../../assets/images/web2.png";

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
        <SwipeableViews
          axis={"x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <PortfolioTabPanel value={value} index={0}>
            <div className="ProjWrapper">
              <div className="projectDetails">
                <div className="projectTitle">VITAL</div>
                <div className="projectDesc">
                  Vital 1 Purified Water provides clean, refreshing hydration
                  that highlight the importance of pure water for a healthy
                  lifestyle. The website offers detailed information about the
                  company. Developed using WordPress, Elementor for visually
                  appealing and responsive design, and JavaScript. My
                  contributions included designing and developing the site,
                  implementing custom JavaScript features, integrating contact
                  and order forms, and ensuring SEO-friendly content.
                </div>
                <div className="projectButton">
                  <Button>
                    <span className="btnText">
                      Know Me! <ArrowRightAltIcon />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="siteImage">
                <img src={vitalOne} width={"100%"} />
              </div>
            </div>
          </PortfolioTabPanel>
          <PortfolioTabPanel value={value} index={1}>
            <div className="ProjWrapper">
              <div className="projectDetails">
                <div className="projectTitle">CAMP ALLEN RESORT</div>
                <div className="projectDesc">
                  Camp Allen Resort offers a serene and picturesque getaway,
                  providing a perfect escape into nature with modern amenities
                  and activities for all ages. The website showcases the
                  resort's stunning accommodations, recreational activities, and
                  event facilities. Built using WordPress for its adaptability,
                  Elementor for a visually engaging and responsive design, and
                  JavaScript. My contributions involved designing and developing
                  the site, creating custom JavaScript interactions, integrating
                  booking and contact forms, and ensuring SEO-friendly content.
                </div>
                <div className="projectButton">
                  <Button>
                    <span className="btnText">
                      Know Me! <ArrowRightAltIcon />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="siteImage">
                <img src={campAllen} width={"100%"} />
              </div>
            </div>
          </PortfolioTabPanel>
          <PortfolioTabPanel value={value} index={2}>
            <div className="ProjWrapper">
              <div className="projectDetails">
                <div className="projectTitle">HARANA.PH</div>
                <div className="projectDesc">
                  Harana.PH is the first professional serenade and surprise
                  service in the Philippines.This platform offers personalized
                  serenades for proposals, weddings, parties, graduations,
                  birthdays, events, and anniversaries. Developed using
                  WordPress, Elementor, and JavaScript, the site features a
                  modern design, responsive layout, interactive booking forms,
                  and optimized performance. My contributions included designing
                  and developing the site, creating custom JavaScript features,
                  integrating forms, and ensuring SEO-friendly content.
                </div>
                <div className="projectButton">
                  <Button>
                    <span className="btnText">
                      Know Me! <ArrowRightAltIcon />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="siteImage">
                <img src={harana} width={"100%"} />
              </div>
            </div>
          </PortfolioTabPanel>
          <PortfolioTabPanel value={value} index={3}>
            <div className="ProjWrapper">
              <div className="projectDetails">
                <div className="projectTitle">HOTJOBS PH</div>
                <div className="projectDesc">
                  HotJobs is a comprehensive job searching portal designed to
                  connect job seekers with employers efficiently. The platform
                  features a wide range of job listings, resume submission, and
                  job application tools. Developed using WordPress, Elementor,
                  and JavaScript for enhanced interactivity, the site also
                  leverages specialized plugins for job postings. My
                  contributions included designing and developing the site,
                  implementing custom JavaScript for dynamic features,
                  integrating job posting plugins, and ensuring SEO-friendly
                  content.
                </div>
                <div className="projectButton">
                  <Button>
                    <span className="btnText">
                      Know Me! <ArrowRightAltIcon />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="siteImage">
                <img src={hotJobs} width={"100%"} />
              </div>
            </div>
          </PortfolioTabPanel>
          {/* <PortfolioTabPanel value={value} index={2}>
              Item Two
            </PortfolioTabPanel>
            <PortfolioTabPanel value={value} index={3}>
              Item Three
            </PortfolioTabPanel> */}
        </SwipeableViews>
      </Box>
      <AppBar
        position="static"
        className="tabContainer"
        sx={{ color: fontColor }} // Utilize fontColor here
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Vital" {...a11yProps(2)} />
          <Tab label="CampAllen Resort" {...a11yProps(3)} />
          <Tab label="Harana.ph" {...a11yProps(0)} />
          <Tab label="HotJobs PH" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    </Box>
  );
}

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
    <Box sx={{ bgcolor: "background.paper", height: "100%" }}>
      <Box className="containers">
        <Box className="content">
          <SwipeableViews
            axis={"x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <PortfolioTabPanel value={value} index={0}>
              <div className="wrapper">
                <div className="workDetails">
                  <div>test</div>
                  <div>test</div>
                </div>
                <div className="siteImage">test</div>
              </div>
            </PortfolioTabPanel>
            <PortfolioTabPanel value={value} index={1}>
              Item Two
            </PortfolioTabPanel>
            <PortfolioTabPanel value={value} index={2}>
              Item Three
            </PortfolioTabPanel>
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
            <Tab label="Harana.ph" {...a11yProps(0)} />
            <Tab label="Strategist.ph" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </Box>
    </Box>
  );
}

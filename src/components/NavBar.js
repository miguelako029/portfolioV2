import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box } from "@mui/material"; // Add this import for Box component
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-scroll";
import Container from "@mui/material/Container";

import { useColorMode } from "../assets/script/DarkModeContext"; // Import the useColorMode hook

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const { mode, toggleColorMode } = useColorMode();

  const linkStyles = {
    textDecoration: "none",
    color: mode === "dark" ? "#ffffff" : "#000000",
    fontWeight: 100,
    padding: "10px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <Toolbar
            sx={{
              background: mode === "dark" ? "#000000" : "#FFF",
              transition: "background-color 0.7s ease",
            }}
          >
            <Box
              // sx={{
              //   display: "flex",
              //   alignItems: "left",
              //   justifyContent: "left",
              //   bgcolor: mode === "dark" ? "#000000" : "#FFF",
              //   color: "text.primary",
              //   borderRadius: 1,
              //   transition: "background-color 0.7s ease",
              //   p: 3,

              // }}
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link // Use Link component as the root of the Button
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="menu-item"
                href="/hero"
                style={linkStyles}
              >
                Home
              </Link>

              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                className="menu-item"
                href="/about"
                style={linkStyles}
              >
                About
              </Link>

              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="menu-item"
                href="/experience"
                style={linkStyles}
              >
                Experience
              </Link>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="menu-item"
                href="/portfolio"
                style={linkStyles}
              >
                Works
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="menu-item"
                href="/contact"
                style={linkStyles}
              >
                Contact
              </Link>
            </Box>

            <Box
              // sx={{
              //   display: "flex",
              //   alignItems: "right",
              //   justifyContent: "right",
              //   bgcolor: mode === "dark" ? "#000000" : "#FFF",
              //   color: "text.primary",
              //   borderRadius: 1,
              //   transition: "background-color 0.7s ease",
              //   p: 3,
              // }}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === "dark" ? (
                  <Brightness7Icon style={{ color: "white" }} /> // Set icon color explicitly
                ) : (
                  <Brightness4Icon style={{ color: "black" }} /> // Set icon color explicitly
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container></Container>
    </React.Fragment>
  );
}

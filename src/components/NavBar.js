import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-scroll";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

import { useColorMode } from "../assets/script/DarkModeContext";

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
  const { mode, toggleColorMode, fontColor, backgroundColor } = useColorMode();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

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
              display: "flex", // Use flex layout
              justifyContent: "space-between", // Place items at each end
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-200}
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
                offset={-300}
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
                offset={-100}
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
              sx={{ display: { xs: "block", sm: "none", color: fontColor } }}
            >
              <IconButton onClick={handleDrawerOpen} color="inherit">
                <MenuIcon />
              </IconButton>

              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>

            {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === "dark" ? (
                  <Brightness7Icon style={{ color: "white" }} />
                ) : (
                  <Brightness4Icon style={{ color: "black" }} />
                )}
              </IconButton>
            </Box> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container></Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: "250px",
            backgroundColor: backgroundColor,
          },
        }}
      >
        {/* Add a Close button */}
        <IconButton
          sx={{ marginLeft: "auto", color: fontColor }}
          onClick={handleDrawerClose}
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
        <List>
          <ListItem sx={{ textAlign: "center" }}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="menu-item"
              href="/hero"
              style={linkStyles}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              className="menu-item"
              href="/about"
              style={linkStyles}
            >
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="menu-item"
              href="/experience"
              style={linkStyles}
            >
              Experience
            </Link>
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

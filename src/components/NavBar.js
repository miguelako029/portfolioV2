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
import menulogo from "../assets/images/logo.png";

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
  const { mode, toggleColorMode, fontColor, backgroundColorMenu } =
    useColorMode();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const linkStyles = {
    textDecoration: "none",
    color: mode === "dark" ? "#eff0ee" : "#253238",
    fontWeight: 100,
    padding: "0px",
    transition: "background-color 0.3s ease",

    fontWeight: 100,

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            justifyContent: "center",
            alignContent: "center",
            verticalAlign: "center",
          }}
        >
          <Toolbar
            sx={{
              background: mode === "dark" ? "#253238" : "#eff0ee",
              transition: "background-color 0.7s ease",
              display: "flex", // Use flex layout

              padding: "20px",
              height: "20",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                // className="menu-item"
                href="/hero"
                style={linkStyles}
                onClick={handleDrawerClose}
              >
                <img
                  src={menulogo}
                  style={{
                    height: "90px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                />
              </Link>

              {/* <Link
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
              </Link> */}
              {/* <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="menu-item"
                href="/portfolio"
                style={linkStyles}
              >
                My Works
              </Link> */}
              {/* <Link
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
              </Link> */}
            </Box>

            <Box
              sx={{ display: { xs: "block", sm: "none", color: fontColor } }}
            >
              <IconButton onClick={handleDrawerOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === "dark" ? (
                  <Brightness7Icon style={{ color: "white" }} />
                ) : (
                  <Brightness4Icon style={{ color: "black" }} />
                )}
              </IconButton>
            </Box>
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
            backgroundColor: backgroundColorMenu,
            width: 300,
          },
        }}
        className="drawerMobile"
      >
        {/* Add a Close button */}
        <IconButton
          sx={{ marginLeft: "auto", color: fontColor }}
          onClick={handleDrawerClose}
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            paddingTop: "100px",
          }}
        >
          <ListItem sx={{ justifyContent: "left" }}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="menu-itemMobile"
              href="/hero"
              style={linkStyles}
              onClick={handleDrawerClose}
            >
              Home
            </Link>
          </ListItem>

          <ListItem sx={{ justifyContent: "left" }}>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="menu-itemMobile"
              href="/portfolio"
              style={linkStyles}
              onClick={handleDrawerClose}
            >
              Works
            </Link>
          </ListItem>
          <ListItem sx={{ justifyContent: "left" }}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              className="menu-itemMobile"
              href="/contact"
              style={linkStyles}
              onClick={handleDrawerClose}
            >
              Contact
            </Link>
          </ListItem>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          ></List>

          <ListItem
            sx={{
              alignSelf: "flex-end",
              marginBottom: "10px", // Add margin to separate it from the bottom edge
            }}
          >
            <IconButton
              onClick={toggleColorMode}
              sx={{ marginLeft: "auto", color: fontColor }}
              className="darkmodeMobile"
            >
              {mode === "dark" ? (
                <>
                  <Brightness7Icon />
                  <span style={{ color: fontColor, marginLeft: 5 }}>
                    Dark: On
                  </span>
                </>
              ) : (
                <>
                  <Brightness4Icon />
                  <span style={{ color: fontColor, marginLeft: 5 }}>
                    Dark: Off
                  </span>
                </>
              )}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

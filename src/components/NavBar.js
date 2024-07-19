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
      <HideOnScroll {...props} className="test">
        <AppBar
          className="navAppBar"
          sx={{
            background:
              mode === "dark"
                ? "rgba(255, 255, 255, 0.31)"
                : "rgba(255, 255, 255, 0.31)",
            // left: "40",
            borderRadius: "50px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(12.2px)",
            WebkitBackdropFilter: "blur(12.2px)",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                // display: { xs: "none", sm: "flex" },
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
                Know Me
              </Link>

              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-item"
                href="/portfolio"
                style={linkStyles}
              >
                My Works
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
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === "dark" ? (
                  <Brightness7Icon style={{ color: "white" }} />
                ) : (
                  <Brightness4Icon style={{ color: "black" }} />
                )}
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
    </React.Fragment>
  );
}

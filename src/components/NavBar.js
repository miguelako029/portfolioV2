import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { Link } from "react-scroll";

import Content from "../App";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

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

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {/* {theme.palette.mode} mode */}
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default function HideAppBar(props) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const linkStyles = {
    textDecoration: "none",
    color: mode === "dark" ? "#ffffff" : "#000000", // Set text color based on mode
    fontWeight: 400,
    padding: "10px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  };

  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ColorModeContext.Provider value={colorMode}>
          <HideOnScroll {...props}>
            <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <Toolbar
                sx={{ background: mode === "dark" ? "#121212" : "#FFF" }}
              >
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
                    offset={0}
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
                <MyApp />
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        </ColorModeContext.Provider>
      </ThemeProvider>
      <Toolbar />
      <Container></Container>
    </React.Fragment>
  );
}

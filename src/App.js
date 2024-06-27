import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./pages/hero";
import About from "./pages/about";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeProvider } from "./assets/script/DarkModeContext"; // Update the path\
import ScrollToTop from "react-scroll-to-top";
// import { useColorMode } from "./assets/script/DarkModeContext";

function App() {
  const theme = createTheme({
    // Your theme configuration
  });

  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50000) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const { mode, backgroundColor, fontColor, BorderColor } = useColorMode();

  return (
    <ColorModeProvider>
      <ThemeProvider theme={theme}>
        <Hero />
        <NavBar />
        {/* <About /> */}
        {/* <Experience /> */}

        <Portfolio />
        <Contact />
        <ScrollToTop
          smooth
          to="Home"
          style={{ zIndex: "100", bottom: 70, right: 30 }}
        />
      </ThemeProvider>
    </ColorModeProvider>
  );
}

export default App;

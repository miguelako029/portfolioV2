import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./pages/hero";
import About from "./pages/about";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeProvider } from "./assets/script/DarkModeContext"; // Update the path

function App() {
  const theme = createTheme({
    // Your theme configuration
  });

  return (
    <ColorModeProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </ThemeProvider>
    </ColorModeProvider>
  );
}

export default App;

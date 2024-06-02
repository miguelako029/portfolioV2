import React, { createContext, useContext, useState, useMemo } from "react";

const DarkModeContext = createContext();

export const useColorMode = () => {
  return useContext(DarkModeContext);
};

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const backgroundColor = mode === "dark" ? "#253238" : "#f1f2ed";
  const fontColor = mode === "dark" ? "#f1f2ed" : "#253238";
  const fontHero = mode === "dark" ? "#e6e6e6" : "#373535";
  const backgroundColorModal = mode === "dark" ? "#f1f2ed" : "#253238";
  const fontModal = mode === "dark" ? "#0780e2" : "#0780e2";
  const BorderColor = mode === "dark" ? "#f1f2ed" : "#253238";
  const backgroundColorMenu = mode === "dark" ? "#1a1a1a" : "#f1f2ed";

  const contextValue = useMemo(
    () => ({
      mode,
      toggleColorMode,
      backgroundColor,
      backgroundColorModal,
      fontColor,
      fontHero,
      fontModal,
      BorderColor,
      backgroundColorMenu,
    }),
    [mode]
  );

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

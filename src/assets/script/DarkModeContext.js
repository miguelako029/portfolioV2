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

  const backgroundColor = mode === "dark" ? "#000" : "#FFF";
  const fontColor = mode === "dark" ? "#FFF" : "#000";
  const fontHero = mode === "dark" ? "#e6e6e6" : "#242323";
  const backgroundColorModal = mode === "dark" ? "#FFF" : "#000";

  const contextValue = useMemo(
    () => ({
      mode,
      toggleColorMode,
      backgroundColor,
      backgroundColorModal,
      fontColor,
      fontHero,
    }),
    [mode]
  );

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

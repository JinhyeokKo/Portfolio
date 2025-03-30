import React, {createContext, useContext, useState} from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import whiteBgImage from "../../assets/white_bg.jpg";
import darkBgImage from "../../assets/dark_bg.png";

const lightTheme = {
    bgColor: "#e2e2e2",
    textColor: "#000",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundImage: `url(${whiteBgImage})`,
};

const darkTheme = {
    bgColor: "#1b1b1b",
    textColor: "#fff",
    backgroundColor: "#4e4e4e",
    shadowColor: "rgba(255, 255, 255, 0.1)",
    backgroundImage: `url(${darkBgImage})`,
};

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

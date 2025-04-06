import React, {useState} from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import whiteBgImage from "../../assets/white_bg.jpg";
import darkBgImage from "../../assets/dark_bg.png";
import {ThemeContext} from "./ThemeContext.jsx";

const lightTheme = {
    bgColor: "#f7f7f7",
    textColor: "#000",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundImage: `url(${whiteBgImage})`,
};

const darkTheme = {
    bgColor: "#212121",
    textColor: "#fff",
    backgroundColor: "#3b3b3b",
    shadowColor: "rgba(255, 255, 255, 0.1)",
    backgroundImage: `url(${darkBgImage})`,
};

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

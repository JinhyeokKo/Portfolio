import React, {useEffect, useState} from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import {ThemeContext} from "./ThemeContext.jsx";
import {lightTheme, darkTheme} from "./themes.jsx";


export default function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (e) => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

import whiteBgImage from "../../assets/white_bg.jpg";
import darkBgImage from "../../assets/dark_bg.jpg";

export const lightTheme = {
    bgColor: "#ffffff",
    textColor: "#000",
    itemBgColor: "#f9f9fb",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundImage: `url(${whiteBgImage})`,
    boxShadow: "rgba( 31, 38, 135, 0.3 )",
    boxBackground: "rgba( 205, 205, 205, 0.1 )"
};

export const darkTheme = {
    bgColor: "#1b1b1b",
    textColor: "#fff",
    itemBgColor: "#313131",
    shadowColor: "rgba(255, 255, 255, 0)",
    backgroundImage: `url(${darkBgImage})`,
    boxShadow: "rgba( 49, 49, 49, 0.3 )",
    boxBackground: "rgba( 49, 49, 49, 0.25 )",
};
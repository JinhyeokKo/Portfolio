import {useContext} from "react";
import {ThemeContext} from "../ui/ThemeContext.jsx";

export function useTheme() {
    return useContext(ThemeContext);
}
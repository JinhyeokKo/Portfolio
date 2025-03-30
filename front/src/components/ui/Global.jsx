import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
        transition: background-color 0.3s, color 0.3s;
    }
`;
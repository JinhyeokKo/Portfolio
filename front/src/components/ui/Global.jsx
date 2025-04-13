import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.backgroundImage} fixed center center;
        background-size: cover;
        color: ${(props) => props.theme.textColor};
        transition: background-color 0.3s, color 0.3s;
    }
`;
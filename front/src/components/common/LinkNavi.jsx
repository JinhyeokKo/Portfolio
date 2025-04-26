import styled from "styled-components";
import useTheme from "../../context/theme/useTheme.jsx";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import FullscreenToggle from "../screen/FullscreenToggle.jsx";

const Nav = styled.nav`
    position: fixed;
    top: 1rem;
    right: 1rem;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    z-index: 10;
    gap: 1rem;
`;

const ToggleButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.$isDarkMode ? "#ffb347" : "#ec407a"};
    padding: 0;
    font-size: 2rem;
`;

export default function LinkNavi() {
    const {isDarkMode, toggleTheme} = useTheme();

    return (
            <Nav>
                <ToggleButton onClick={toggleTheme}  $isDarkMode={isDarkMode}>
                    {isDarkMode ? <MdDarkMode/> : <MdLightMode/>}
                </ToggleButton>
                <FullscreenToggle />
            </Nav>
    );
}

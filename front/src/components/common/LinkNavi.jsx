import {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useTheme} from "../hooks/useTheme.jsx";
import {FiMenu, FiX} from "react-icons/fi";
import {MdDarkMode, MdLightMode} from "react-icons/md";

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

const NavContainer = styled.div`
    position: fixed;
    top: 5rem;
    right: 1rem;
    display: flex;
    align-items: center;
    z-index: 10;
    gap: 1rem;
`;

const NavLinks = styled.div`
    gap: 0.5rem;
    flex-direction: column;
    text-align: center;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    padding: 0.5rem;

    a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
    }
`;


const ToggleButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.theme.textColor};
    padding: 0;
    font-size: 2rem;
`;

const MenuButton = styled.button`
    display: block;
    background: none;
    border: none;
    padding: 0;
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};
`;

const StyledLink = styled(Link)`
    color: ${(props) => props.theme.textColor};
`

const StyledExternalLink = styled.a`
    color: ${(props) => props.theme.textColor};
`

export default function LinkNavi() {
    const {isDarkMode, toggleTheme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Nav>
                <ToggleButton onClick={toggleTheme}>
                    {isDarkMode ? <MdDarkMode/> : <MdLightMode/>}
                </ToggleButton>
                <MenuButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX/> : <FiMenu/>}
                </MenuButton>
            </Nav>
            <NavContainer>
                <NavLinks $isOpen={isOpen}>
                    <StyledLink to="/" onClick={() => setIsOpen(false)}>Home</StyledLink>
                    <StyledExternalLink href="https://github.com/JinhyeokKo" target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}>Github</StyledExternalLink>
                    <StyledLink to="/blog" onClick={() => setIsOpen(false)}>Blog</StyledLink>
                </NavLinks>
            </NavContainer>
        </>
    );
}

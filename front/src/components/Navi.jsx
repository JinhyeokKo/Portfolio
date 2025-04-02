import {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useTheme} from "./ui/useTheme.jsx";
import {FiMenu, FiX} from "react-icons/fi";
import {MdDarkMode, MdLightMode} from "react-icons/md";

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 3rem;
    margin: 0 auto;
    padding: 0.3rem 3rem 0.3rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.shadowColor};
    box-sizing: border-box;
    z-index: 10;
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1rem;

    a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
    }

    @media (max-width: 48rem) {
        flex-direction: column;
        position: absolute;
        top: 3rem;
        right: 0;
        background-color: ${(props) => props.theme.shadowColor};
        width: 30vw;
        text-align: center;
        padding: 1rem 0;
        display: ${(props) => (props.$isOpen ? "flex" : "none")};
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
    display: none;
    background: none;
    border: none;
    padding: 0;
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};

    @media (max-width: 48rem) {
        display: block;
    }
`;

export default function Navi() {
    const {isDarkMode, toggleTheme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <h3>jinhyeok</h3>
            <NavContainer>
                <NavLinks $isOpen={isOpen}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/project" onClick={() => setIsOpen(false)}>Project</Link>
                    <a href="https://github.com/JinhyeokKo" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>GitHub</a>
                    <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                </NavLinks>
                <ToggleButton onClick={toggleTheme}>
                    {isDarkMode ? <MdDarkMode/> : <MdLightMode/>}
                </ToggleButton>
                <MenuButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX/> : <FiMenu/>} {/* 버튼 상태에 따라 햄버거 / 닫기 아이콘 변경 */}
                </MenuButton>
            </NavContainer>
        </Nav>
    );
}

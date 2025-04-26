import styled from "styled-components";


const Sidebar = styled.nav`
    position: fixed;
    top: 50%;
    left: 3rem;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    @media (min-width:1400px) {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }
`;

const NavItem = styled.a`
    color: ${(props) => (props.$active ? props.theme.textColor : "#aaa")};
    font-weight: ${(props) => (props.$active ? "700" : "500")};
    font-size: 2.5rem;
    transition: all 0.3s;

    &:hover {
        color: ${(props) => props.theme.textColor};
    }

    @media (max-width: 1600px) and (min-width: 1400px) {
        font-size: 2rem;
    }
`;

export default function SideNavi({ currentSection }) {
    return (
        <Sidebar>
            <NavItem href="#profile" $active={currentSection === "profile"}>About Me</NavItem>
            <NavItem href="#interview" $active={currentSection === "interview"}>Interview</NavItem>
            <NavItem href="#projects" $active={currentSection === "projects"}>Project</NavItem>
        </Sidebar>
    );
}
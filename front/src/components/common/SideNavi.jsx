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

    @media (min-width:1024px) {
        opacity: 1;
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
`;

export default function SideNavi({ currentSection }) {
    return (
        <Sidebar>
            <NavItem href="#about" $active={currentSection === "about"}>소개</NavItem>
            <NavItem href="#projects" $active={currentSection === "projects"}>프로젝트</NavItem>
            <NavItem href="#blog" $active={currentSection === "blog"}>블로그</NavItem>
        </Sidebar>
    );
}
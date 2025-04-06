import Project from "./Project.jsx";
import Blog from "./Blog";
import Cover from "./Cover.jsx";
import styled from "styled-components";
import About from "./About.jsx";
import SideNavi from "../common/SideNavi.jsx";
import useScrollSection from "../hooks/useScrollSection.jsx";

const First = styled.section`
    position: sticky;
    top: 0;
    z-index: 1;
`

const Second = styled.section`
    position: relative;
    z-index: 2;
    background-color: ${(props) => props.theme.bgColor};
`

export default function Home() {
    const {currentSection, showNavi} = useScrollSection(
        ["cover", "about", "projects", "blog", "lastCover"], ["cover", "lastCover"])

    return (
        <>
            <First>
                <Cover/>
            </First>
            <Second>
                {showNavi && <SideNavi currentSection={currentSection}/>}
                <About/>
                <Project/>
                <Blog/>
                <Cover isLastPage={true}/>
            </Second>
        </>
    );
}
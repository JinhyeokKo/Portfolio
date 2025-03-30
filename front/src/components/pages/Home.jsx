import Projects from "./Projects";
import Blog from "./Blog";
import Cover from "./Cover.jsx";
import styled from "styled-components";
import About from "./About.jsx";

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
    return (
        <>
            <First>
                <Cover/>
            </First>
            <Second>
                <About/>
                <Projects/>
                <Blog/>
            </Second>
        </>
    );
}
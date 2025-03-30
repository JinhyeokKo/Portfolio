import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Section = styled.section`
    max-width: 80vw; /* 최대 너비 설정 (1280px = 80rem) */
    width: 100vw; /* 작은 화면에서는 100% 차지 */
    margin: 0 auto; /* 중앙 정렬 */
    padding: 2.5rem;
    box-sizing: border-box;
`;

const Title = styled.h2`
    font-size: 1.5rem; /* 24px -> 1.5rem */
    margin-bottom: 1rem; /* 16px -> 1rem */
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); /* 250px -> 15rem */
    grid-auto-rows: 20rem;
    gap: 1rem; /* 16px -> 1rem */
`;

const Card = styled.div`
    background: ${(props) => props.theme.backgroundColor};
    padding: 1rem; /* 16px -> 1rem */
    border-radius: 0.5rem; /* 8px -> 0.5rem */
    box-shadow: 0 0.25rem 0.375rem ${(props) => props.theme.shadowColor}; /* 4px 6px -> 0.25rem 0.375rem */
    text-align: center;
`;

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const dummyProjects = [
            {id: 1, title: "Project 1", description: "React 포트폴리오"},
            {id: 2, title: "Project 2", description: "Next.js 블로그"},
            {id: 3, title: "Project 3", description: "Vue.js 대시보드"},
            {id: 4, title: "Project 4", description: "Svelte 랜딩페이지"},
            {id: 5, title: "Project 5", description: "Node.js API 서버"},
            {id: 6, title: "Project 6", description: "Python Flask 앱"},
        ];
        setProjects(dummyProjects);
    }, []);

    return (
        <Section>
            <Title>Projects</Title>
            <Grid>
                {projects.map((project) => (
                    <Card key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </Card>
                ))}
            </Grid>
        </Section>
    );
}

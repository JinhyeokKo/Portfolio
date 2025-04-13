import React, {useEffect, useState} from "react";
import {Container, Section, Title} from "../ui/CommonStyles.jsx"
import CarouselWrapper from "../list/CarouselWrapper.jsx";
import {dummyProjects} from "../data/Dummy.jsx";
import ProjectListItem from "../list/ProjectListItem.jsx";
import styled from "styled-components";

const TypeMenu = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 3rem;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 479px) {
        margin: 1rem;
    }
`;

const TypeButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.itemBgColor};
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.$active ? "#5e6eff" : props.theme.textColor};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.$active ? props.theme.accentColor : props.theme.accentColorLight};
        color: ${props => props.$active ? props.theme.accentColor : props.theme.accentColorLight};
    }
`;

export default function Project() {
    const [projects, setProjects] = useState([]);
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [activeType, setActiveType] = useState("All");
    const [projectTypes, setProjectTypes] = useState(["All"]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    useEffect(() => {
        setProjects(dummyProjects);

        const types = ["All", ...new Set(dummyProjects.map(project => project.type))];
        setProjectTypes(types);

        setDisplayedProjects(dummyProjects);
    }, []);

    const filterByType = (type) => {
        setActiveType(type);
        setCurrentPageIndex(0);

        if (type === "All") {
            setDisplayedProjects(projects);
        } else {
            const filtered = projects.filter(project => project.type === type);
            setDisplayedProjects(filtered);
        }
    };

    return (
        <Section id="projects">
            <Container>
                <Title>Projects</Title>

                <TypeMenu>
                    {projectTypes.map((type) => (
                        <TypeButton
                            key={type}
                            $active={activeType === type}
                            onClick={() => filterByType(type)}
                        >
                            {type}
                        </TypeButton>
                    ))}
                </TypeMenu>

                <CarouselWrapper
                    items={displayedProjects}
                    renderItem={(project) => <ProjectListItem key={project.id} project={project}/>}
                    currentPageIndex={currentPageIndex} onPageChange={setCurrentPageIndex}
                />
            </Container>
        </Section>
    );
}
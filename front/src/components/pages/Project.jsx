import React, {useEffect, useState} from "react";
import {Container, Section, Title} from "../ui/CommonStyles.jsx"
import CarouselWrapper from "../carousel/CarouselWrapper.jsx";
import {projectItem} from "../data/Data.jsx";
import ProjectListItem from "../list/ProjectListItem.jsx";
import styled from "styled-components";
import Modal from "../ui/Modal.jsx";
import DocumentViewer from "../viewer/DocumentViewer.jsx";
import ProjectViewer from "../viewer/ProjectViewer.jsx";

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        setProjects(projectItem);

        const types = ["All", ...new Set(projectItem.map(project => project.type))];
        setProjectTypes(types);

        setDisplayedProjects(projectItem);
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

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
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
                    renderItem={(project) => <ProjectListItem key={project.id} project={project}
                                                              onOpenModal={() => handleOpenModal(project)}/>}
                    currentPageIndex={currentPageIndex} onPageChange={setCurrentPageIndex}
                />
                {selectedProject && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}>
                        <ProjectViewer logo={selectedProject.logo} title={selectedProject.title}
                                       description={selectedProject.description} term={selectedProject.term}/>
                        <DocumentViewer url={selectedProject.url} intro={selectedProject.intro}/>
                    </Modal>
                )}
            </Container>
        </Section>
    );
}
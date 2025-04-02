import React, {useEffect, useState} from "react";
import {Section, Title} from "../ui/CommonStyles.jsx"
import ProjectList from "../list/ProjectList.jsx";
import {dummyProjects} from "../Dummy.jsx";

export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(dummyProjects);
    }, []);

    return (
        <Section>
            <Title>Projects</Title>
            <ProjectList projects={projects} />
        </Section>
    );
}

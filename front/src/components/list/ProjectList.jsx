import ProjectListItem from "./ProjectListItem.jsx";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 28rem));
    grid-auto-rows: 30rem;
    gap: 1rem;
`;

export default function ProjectList(props) {
    const {projects} = props;
    return (
        <Grid>
            {projects.map((project) => {
                return (
                <ProjectListItem key={project.id} project={project}/>
                )
            })}
        </Grid>
    )
}
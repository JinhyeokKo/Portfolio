import {Container, ContentTitle, Description, Section, Title} from "../ui/CommonStyles.jsx";
import {about} from "../data/Data.jsx";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    padding: 0;
    gap: 1rem;
`;

const ListItem = styled.li`
    padding: 0 1rem 1rem;
    margin-bottom: 1rem;
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 1px );
    border-radius: 0.5rem;
    background: ${(props) => props.theme.boxBackground};
    box-shadow: 0 0.5rem 2rem 0 ${(props) => props.theme.boxShadow};
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export default function Interview() {
    return (
        <Section id="interview">
            <Container>
                <Title>Interview</Title>
                <List>
                    {about.map((about) => (
                        <ListItem key={about.id}>
                            <ContentTitle>{about.title}</ContentTitle>
                            <Description>{about.description}</Description>
                        </ListItem>
                    ))}
                </List>
            </Container>
        </Section>
    )
}
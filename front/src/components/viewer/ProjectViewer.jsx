import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`


const Title = styled.h2`
`

const Description = styled.p`
    width: 40vw;
`

const Img = styled.img`
    max-width: 48rem;
    width: 40vw;
    border: 1rem solid ${(props) => props.theme.textColor};
    border-radius: 1rem;
    @media (max-width: 48rem) {
        width: 90vw;
    }
`

export default function ProjectViewer({logo, title, description, term}) {
    return (
        <Container>
            <Title>{title} {description}</Title>
            <Description>{term}</Description>
            <Img src={logo}/>
        </Container>
    )
}
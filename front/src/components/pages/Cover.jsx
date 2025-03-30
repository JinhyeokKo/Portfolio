import styled from "styled-components";

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;

    background-image: ${(props) => props.theme.backgroundImage};
    background-color: transparent;
    background-size: cover;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    text-align: center;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 400;
`;

const Description = styled.p`
    margin: 0;
    font-size: 1.2rem;
`;

const Strong = styled.strong`
    font-weight: 700;
`;

export default function Cover() {
    return (
        <Section>
            <Title>배움과 경험을 통해 끊임없이 나아가는 개발자 <Strong>고진혁</Strong>입니다.</Title>
            <Description>
                어떤 분야든 만들고 싶은 것이 생기면 스스로 찾아가며 공부하고, 직접 구현하는 과정을 즐깁니다.
            </Description>
            <Description>
                새로운 기술을 배우는 데 주저하지 않으며, 직접 부딪혀 경험하는 것을 중요하게 생각합니다.
            </Description>
            <Description>
                다양한 경험을 통해 계속해서 성장해 나아가고 싶습니다!</Description>
        </Section>
    );
}
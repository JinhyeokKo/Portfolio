import styled from "styled-components";
import {FaBirthdayCake, FaCertificate, FaEnvelope, FaGithub, FaUniversity, FaUser} from "react-icons/fa";
import React from "react";

const Section = styled.section`
    max-width: 90vw;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    padding: 2.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    
`;

const Intro = styled.div`

`

const Profile = styled.div`
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.backgroundColor};
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem ${(props) => props.theme.shadowColor};
    padding: 2.5rem;
`

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    gap: 1rem;
`;

const Description = styled.p`
    white-space: pre-line;
`;

const ListItem = styled.li`
    background: ${(props) => props.theme.backgroundColor};
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 0.25rem 0.375rem ${(props) => props.theme.shadowColor};
`;

const about = [
    {id: 1, title: "보건 행정에서 개발자로, 새로운 길을 찾다",
        description: "본래 보건 행정을 전공했지만, 반복적인 업무 속에서 '더 창의적인 무언가를 만들고 싶다'는 갈증을 느꼈습니다.\n" +
            "그러던 중, 친구의 추천으로 웹 개발을 시작했고, 단순한 웹사이트를 만들어 보면서 새로운 세계가 열렸습니다.\n" +
            "이후 본격적으로 배워보고 싶어 부트캠프에 참여했고, 지금은 계속해서 배우고 성장하는 과정 자체를 즐기고 있습니다."},
    {id: 2, title: "123", description: "456"},
];




// 섹션 제목 스타일
const SectionTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.textColor};
    padding-bottom: 0.5rem;
`;

// 리스트 스타일
const InfoList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

// 리스트 아이템 스타일
const InfoItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;

    svg {
        color: ${(props) => props.theme.accentColor};
    }
`;

const InfoItemDescription = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: #aaaaaa;
    padding-left: 2rem;
`

export default function About() {
    return (
        <Section>
            <Intro>
            <Title>About Me</Title>
            <List>
                {about.map((blog) => (
                    <ListItem key={blog.id}>
                        <h3>{blog.title}</h3>
                        <Description>{blog.description}</Description>
                    </ListItem>
                ))}
            </List>
            <Title>Skills & Tools</Title>
            </Intro>
            <Profile>
                <SectionTitle>Contact</SectionTitle>
                <InfoList>
                    <InfoItem><FaUser/>고진혁</InfoItem>
                    <InfoItem><FaBirthdayCake/>1997.08.12</InfoItem>
                    <InfoItem><FaEnvelope/>jinhyeok.ko@outlook.kr</InfoItem>
                    <InfoItem><FaGithub/>@JinhyeokKo</InfoItem>
                </InfoList>
                <SectionTitle>Education</SectionTitle>
                <InfoList>
                    <InfoItem><FaUniversity/>부산대학교 부트캠프 6기</InfoItem>
                    <InfoItemDescription>2024.02 ~ 2024.08</InfoItemDescription>
                </InfoList>
                <InfoList>
                    <InfoItem><FaUniversity/>동아대학교 건강관리학과</InfoItem>
                    <InfoItemDescription>2022.03 ~ 2024.02</InfoItemDescription>
                    <InfoItemDescription>학점: 3.6 / 4.5</InfoItemDescription>
                </InfoList>
                <InfoList>
                    <InfoItem><FaUniversity/>부산과학기술대학교 보건의료행정학과</InfoItem>
                    <InfoItemDescription>2016.03 ~ 2022.02</InfoItemDescription>
                    <InfoItemDescription>학점: 3.7 / 4.5</InfoItemDescription>
                </InfoList>

                <SectionTitle>Certificate</SectionTitle>
                <InfoList>
                    <InfoItem><FaCertificate/> 정보처리기사</InfoItem>
                    <InfoItemDescription>2024.12.11</InfoItemDescription>
                    <InfoItem><FaCertificate/> SQL개발자(SQLD)</InfoItem>
                    <InfoItemDescription>2024.06.21</InfoItemDescription>
                </InfoList>
            </Profile>
        </Section>
    );
}

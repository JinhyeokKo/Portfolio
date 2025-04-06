import styled from "styled-components";
import {FaBirthdayCake, FaCertificate, FaEnvelope, FaGithub, FaUniversity, FaUser} from "react-icons/fa";
import React from "react";
import {ContentTitle, Description, Section, Title} from "../ui/CommonStyles.jsx"
import {about, Skill} from "../data/Dummy.jsx"

const SectionAbout = styled(Section)`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`

const Intro = styled.div`

`

const Profile = styled.div`
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.backgroundColor};
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem ${(props) => props.theme.shadowColor};
    padding: 2.5rem;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    gap: 1rem;
`;

const ListItem = styled.li`
    background: ${(props) => props.theme.backgroundColor};
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 0.25rem 0.375rem ${(props) => props.theme.shadowColor};
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

const SkillImage = styled.svg`
    height: 3.3rem;
    width: 3.3rem;
`

export default function About() {
    return (
        <SectionAbout id="about">
            <Intro>
                <Title>About Me</Title>
                <List>
                    {about.map((blog) => (
                        <ListItem key={blog.id}>
                            <ContentTitle>{blog.title}</ContentTitle>
                            <Description>{blog.description}</Description>
                        </ListItem>
                    ))}
                </List>
                <Title>Skills & Tools</Title>
                <List>
                    {Skill.map((skill) => (
                        <SkillImage key={skill.id}>
                            {skill.path}
                        </SkillImage>
                    ))}
                </List>

            </Intro>
            <Profile>
                <ContentTitle>Contact</ContentTitle>
                <InfoList>
                    <InfoItem><FaUser/>고진혁</InfoItem>
                    <InfoItem><FaBirthdayCake/>1997.08.12</InfoItem>
                    <InfoItem><FaEnvelope/>jinhyeok.ko@outlook.kr</InfoItem>
                    <InfoItem><FaGithub/>@JinhyeokKo</InfoItem>
                </InfoList>
                <ContentTitle>Education</ContentTitle>
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

                <ContentTitle>Certificate</ContentTitle>
                <InfoList>
                    <InfoItem><FaCertificate/> 정보처리기사</InfoItem>
                    <InfoItemDescription>2024.12.11</InfoItemDescription>
                    <InfoItem><FaCertificate/> SQL개발자(SQLD)</InfoItem>
                    <InfoItemDescription>2024.06.21</InfoItemDescription>
                </InfoList>
            </Profile>
        </SectionAbout>
    );
}

import {ContentTitle, Section, Title, Container} from "../ui/CommonStyles.jsx";
import styled from "styled-components";
import {FaBirthdayCake, FaCertificate, FaEnvelope, FaGithub, FaUniversity, FaUser} from "react-icons/fa";
import ProfileImg from "../../assets/profile.png"
import Skill from "./Skill.jsx";

const AboutMe = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    gap: 1rem;
    justify-content: center;
`

const InfoList = styled.ul`
    padding: 0 1rem 1rem;
    margin-bottom: 1rem;
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 1px );
    border-radius: 0.5rem;
    background: ${(props) => props.theme.boxBackground};
    box-shadow: 0 0.5rem 2rem 0 ${(props) => props.theme.boxShadow};
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const Img = styled.img`
    position: relative;
    width: 13rem;
`

// 리스트 아이템 스타일
const InfoItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
`;

const InfoItemDescription = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: #aaaaaa;
    padding-left: 2rem;
`

const Skills = styled.div`
`

export default function Profile() {
    return (
        <Section id="profile">
            <Container>
                <Title>About Me</Title>
                <AboutMe>
                    <InfoList>
                        <Img src={ProfileImg}/>
                    </InfoList>
                    <InfoList>
                        <ContentTitle>Contact</ContentTitle>
                        <InfoItem><FaUser/>고진혁</InfoItem>
                        <InfoItem><FaBirthdayCake/>1997.08.12</InfoItem>
                        <InfoItem><FaEnvelope/>jinhyeok.ko@outlook.kr</InfoItem>
                        <InfoItem><FaGithub/>@JinhyeokKo</InfoItem>
                    </InfoList>
                    <InfoList>
                        <ContentTitle>Education</ContentTitle>
                        <InfoItem><FaUniversity/>부산대학교 부트캠프 6기</InfoItem>
                        <InfoItemDescription>2024.02 ~ 2024.08</InfoItemDescription>
                        <InfoItem><FaUniversity/>동아대학교 건강관리학과</InfoItem>
                        <InfoItemDescription>2022.03 ~ 2024.02</InfoItemDescription>
                        <InfoItemDescription>학점: 3.6 / 4.5</InfoItemDescription>
                        <InfoItem><FaUniversity/>부산과학기술대학교 보건의료행정학과</InfoItem>
                        <InfoItemDescription>2016.03 ~ 2022.02</InfoItemDescription>
                        <InfoItemDescription>학점: 3.7 / 4.5</InfoItemDescription>
                    </InfoList>
                    <InfoList>
                        <ContentTitle>Certificate</ContentTitle>
                        <InfoItem><FaCertificate/> 정보처리기사</InfoItem>
                        <InfoItemDescription>2024.12.11</InfoItemDescription>
                        <InfoItem><FaCertificate/> SQL개발자(SQLD)</InfoItem>
                        <InfoItemDescription>2024.06.21</InfoItemDescription>
                    </InfoList>
                </AboutMe>
                <Skills>
                    <Title>Skills & Tools</Title>
                    <Skill/>
                </Skills>
            </Container>
        </Section>
    )
}
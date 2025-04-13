import {ContentTitle} from "../ui/CommonStyles.jsx";
import styled from "styled-components";
import TechIcons from "../data/TechIcon.jsx";

const ItemSet = styled.div`
    width: fit-content;
`

const SkillSet = styled.div`
    width: fit-content;
    margin: 0 1rem;

    @media (max-width: 479px) {
        margin: 0;
    }
`

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`

export default function Skill() {

    return (
        <SkillContainer>
            <SkillSet>
                <ContentTitle>Front-End</ContentTitle>
                <ItemSet>
                    <TechIcons category="front"/>
                </ItemSet>
            </SkillSet>
            <SkillSet>
                <ContentTitle>Back-End</ContentTitle>
                <ItemSet>
                    <TechIcons category="back"/>
                </ItemSet>
            </SkillSet>
            <SkillSet>
                <ContentTitle>MCU S/W</ContentTitle>
                <ItemSet>
                    <TechIcons category="mcu"/>
                </ItemSet>
            </SkillSet>
        </SkillContainer>
    )
}
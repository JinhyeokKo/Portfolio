import Project from "./Project.jsx";
import SideNavi from "../common/SideNavi.jsx";
import useScrollSection from "../hooks/useScrollSection.jsx";
import Menu from "./Menu.jsx";
import Profile from "./Profile.jsx";
import Cover from "./Cover.jsx";
import Interview from "./Interview.jsx";
import SkillsAndTools from "./SkillsAndTools.jsx";

export default function Home() {
    const {currentSection, showNavi} = useScrollSection(
        ["menu", "profile","interview", "skills", "projects", "cover"], ["menu", "cover"])

    return (
        <>
                {showNavi && <SideNavi currentSection={currentSection}/>}
                    <Menu/>
                    <Profile/>
                    <Interview/>
                    <SkillsAndTools/>
                    <Project/>
                    <Cover/>
        </>
    );
}
import Project from "./Project.jsx";
import SideNavi from "../common/SideNavi.jsx";
import useScrollSection from "../hooks/useScrollSection.jsx";
import Profile from "./Profile.jsx";
import Cover from "./Cover.jsx";
import Interview from "./Interview.jsx";

export default function Home() {
    const {currentSection, showNavi} = useScrollSection(
        ["menu","cover", "profile", "interview", "projects", "lastCover"], ["menu", "cover", "lastCover"])

    return (
        <>
            {showNavi && <SideNavi currentSection={currentSection}/>}
            <Cover/>
            <Profile/>
            <Interview/>
            <Project/>
            <Cover isLastPage={true}/>
        </>
    );
}
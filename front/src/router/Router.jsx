import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/pages/Home.jsx";
import Project from "../components/pages/Project.jsx";
import LinkNavi from "../components/common/LinkNavi.jsx";
import ScrollToTopButton from "../components/common/ScrollToTopButton.jsx";
import Profile from "../components/pages/Profile.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <LinkNavi/>
            <ScrollToTopButton/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/menu" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router
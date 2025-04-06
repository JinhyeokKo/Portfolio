import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/pages/Home.jsx";
import Project from "../components/pages/Project.jsx";
import Blog from "../components/pages/Blog.jsx";
import LinkNavi from "../components/common/LinkNavi.jsx";
import {ThemeProvider} from "../components/ui/ThemeProvider.jsx";
import {GlobalStyles} from "../components/ui/Global.jsx"
import ScrollToTopButton from "../components/common/ScrollToTopButton.jsx";

const Router = () => {
    return (
        <ThemeProvider>
            <GlobalStyles/>
            <BrowserRouter>
                <LinkNavi/>
                <ScrollToTopButton/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default Router
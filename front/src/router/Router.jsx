import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/pages/Home.jsx";
import Project from "../components/pages/Project.jsx";
import Blog from "../components/pages/Blog.jsx";
import Navi from "../components/Navi.jsx";
import {ThemeProvider} from "../components/ui/ThemeProvider.jsx";
import {GlobalStyles} from "../components/ui/Global.jsx"

const Router = () => {
    return (
        <ThemeProvider>
            <GlobalStyles/>
            <BrowserRouter>
                <Navi/>
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
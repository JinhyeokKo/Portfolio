import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/pages/Home.jsx";
import Projects from "../components/pages/Projects.jsx";
import Blog from "../components/pages/Blog.jsx";
import Navi from "../components/Navi.jsx";
import {ThemeProvider} from "../components/ui/ThemeContext.jsx";
import {GlobalStyles} from "../components/ui/Global.jsx"
import About from "../components/pages/About.jsx";

const Router = () => {
    return (
        <ThemeProvider>
            <GlobalStyles/>
            <BrowserRouter>
                <Navi/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path="/project" element={<Projects/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default Router
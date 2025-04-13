import React, {useEffect, useState} from "react";
import {Section, Title} from "../ui/CommonStyles.jsx"
import BlogList from "../list/BlogList.jsx";
import {dummyBlog} from "../data/Dummy.jsx"

export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        setBlogs(dummyBlog);
    }, []);

    return (
        <Section id="blog">
            <Title>Blog</Title>
            <BlogList blogs={blogs} />
        </Section>
    );
}

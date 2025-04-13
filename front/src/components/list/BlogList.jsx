import styled from "styled-components";
import BlogListItem from "./BlogListItem.jsx";

const List = styled.ul`
    list-style: none;
    padding: 0;
    gap: 1rem;
`;

export default function BlogList(props){
    const {blogs} = props;
    return (
        <List>
            {blogs.map((blog) => {
                return (
                    <BlogListItem key={blog.id} blog={blog}/>
                )
            })}
        </List>
    )
}
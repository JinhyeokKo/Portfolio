import React from "react";
import styled from "styled-components";

const Section = styled.section`
    padding: 40px;
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 16px;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    gap: 1rem;
`;

const ListItem = styled.li`
    background: ${(props) => props.theme.backgroundColor};
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 0.25rem 0.375rem ${(props) => props.theme.shadowColor};
`;

const blogs = [
    {id: 1, title: "React 상태 관리", description: "Recoil, Redux 비교"},
    {id: 2, title: "Vite가 좋은 이유", description: "빠른 빌드 속도"},
];

export default function Blog() {
    return (
        <Section>
            <Title>Blog</Title>
            <List>
                {blogs.map((blog) => (
                    <ListItem key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                    </ListItem>
                ))}
            </List>
        </Section>
    );
}

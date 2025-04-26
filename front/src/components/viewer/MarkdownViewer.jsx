import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import styled from "styled-components";

const MarkdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MarkdownPageContainer = styled.div`
    max-width: 1024px;
    
    img {
        max-width: 100%;
    }
    
    blockquote {
        border-left: 0.25rem solid #646cff;
        margin: 0;
        padding: 0 1rem;
    }
`

const Loading = () => <div>로딩 중...</div>

export default function MarkdownViewer({url}) {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.text())
            .then(setContent)
            .then(() => setLoading(false))
            .catch(() => {
                setContent("파일을 불러올 수 없습니다.");
                setLoading(false);
            });
    }, [url]);

    if (loading) {
        return <Loading/>;
    }

    return (
        <MarkdownContainer>
            <MarkdownPageContainer>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {content}
                </ReactMarkdown>
            </MarkdownPageContainer>
        </MarkdownContainer>
    );
};

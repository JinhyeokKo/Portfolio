import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export const Markdown = ({url}) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(url)
            .then((res) => res.text()) // 텍스트 데이터로 변환
            .then(setContent)
            .catch(() => setContent("파일을 불러올 수 없습니다."));
    }, [url]);

    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {content}
        </ReactMarkdown>
    );
};

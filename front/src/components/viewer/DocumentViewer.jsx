import React from 'react';
import MarkdownViewer from './MarkdownViewer.jsx';
import PDFViewer from './PDFViewer.jsx';

export default function DocumentViewer({url, intro}) {
    const getFileExtension = (url) => {
        return url.split('.').pop().toLowerCase();
    };

    const fileExtension = getFileExtension(url);

    switch (fileExtension) {
        case 'pdf':
            return (
                <>
                    <MarkdownViewer url={intro}/>
                    <PDFViewer url={url}/>
                </>
            )
        case 'md':
        case 'markdown':
            return (
                <>
                    <MarkdownViewer url={intro}/>
                    <MarkdownViewer url={url}/>
                </>
            )
        default:
            return <div>지원하지 않는 파일 형식입니다: {fileExtension}</div>;
    }
};
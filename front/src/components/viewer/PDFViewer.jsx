import React, {useEffect, useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';
import styled from 'styled-components';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const PDFContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export default function PDFViewer({ url }) {
    const [numPages, setNumPages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [containerWidth, setContainerWidth] = useState(null);
    const containerRef = React.useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth);
            }
        };

        updateWidth();

        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false);
    }

    function onDocumentLoadError(err) {
        setError('PDF 파일을 불러오는데 실패했습니다.');
        setLoading(false);
        console.error('PDF 로드 에러:', err);
    }

    const renderPages = () => {
        if (!numPages) return null;

        const pages = [];
        for (let i = 1; i <= numPages; i++) {
            pages.push(
                <Page
                    key={`page_${i}`}
                    pageNumber={i}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={containerWidth ? containerWidth - 20 : undefined}
                />
            );
        }

        return pages;
    };

    return (
        <PDFContainer ref={containerRef}>
            {loading && <div>로딩 중...</div>}
            {error && <div>{error}</div>}
                <Document
                    file={url}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={<div>PDF 로딩 중...</div>}>
                    {renderPages()}
                </Document>
        </PDFContainer>
    );
}
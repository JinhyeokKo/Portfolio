import {useEffect, useRef, useState} from "react";

export default function usePagination(totalItems, itemMinWidth, itemMaxWidth) {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const [totalSlides, setTotalSlides] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const getAvgItemWidth = () => (itemMinWidth + itemMaxWidth) / 2;

        const updateItemsPerPage = () => {
            if (!containerRef.current) return;
            const containerWidth = containerRef.current.getBoundingClientRect().width;
            const itemWidth = getAvgItemWidth();
            const count = Math.max(1, Math.floor(containerWidth / itemWidth));
            setItemsPerPage(count);
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, [itemMinWidth, itemMaxWidth]);

    useEffect(() => {
        const slides = Math.ceil(totalItems / itemsPerPage);
        setTotalSlides(slides);

        if (slides > 0 && currentIndex >= slides) {
            setCurrentIndex(0);
        }
    }, [totalItems, itemsPerPage, currentIndex]);

    const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));

    return {
        currentIndex,
        itemsPerPage,
        totalSlides,
        handlePrev,
        handleNext,
        setCurrentIndex,
        containerRef,
        isDragging,
        setIsDragging,
        startX,
        setStartX,
        scrollLeft,
        setScrollLeft
    };
}

import PageNavi from "../common/PageNavi.jsx";
import styled from "styled-components";
import SliderWrapper from "../common/SliderWrapper.jsx";
import usePagination from "../hooks/usePagination.jsx";
import useGroupedItems from "../hooks/useGroupedItems.jsx";
import {useEffect} from "react";

const CarouselContainer = styled.div`
    position: relative;
    overflow: hidden;
`;

export default function CarouselWrapper({items, renderItem, currentPageIndex, onPageChange}) {
    const {
        currentIndex,
        itemsPerPage,
        totalSlides,
        handlePrev,
        handleNext,
        containerRef,
        setCurrentIndex,
    } = usePagination(items.length, 240, 400);

    const groupedItems = useGroupedItems(items, itemsPerPage);

    useEffect(() => {
        if (currentPageIndex !== undefined && onPageChange) {
            setCurrentIndex(currentPageIndex);
        }
    }, [currentPageIndex, setCurrentIndex, onPageChange]);

    useEffect(() => {
        if (totalSlides > 0 && currentIndex >= totalSlides) {
            setCurrentIndex(0);
            if (onPageChange) {
                onPageChange(0);
            }
        }
    }, [items, itemsPerPage, totalSlides, currentIndex, setCurrentIndex, onPageChange]);

    const handlePageChange = (newIndex) => {
        if (onPageChange) {
            onPageChange(newIndex);
        }
    };

    return (
        <>

            <CarouselContainer ref={containerRef}>
                <SliderWrapper groupedItems={groupedItems} currentIndex={currentIndex} renderItem={renderItem}/>
            </CarouselContainer>

            <PageNavi currentIndex={currentIndex} totalSlides={totalSlides} onPrev={() => {
                handlePrev();
                handlePageChange(currentIndex - 1);
            }}
                      onNext={() => {
                          handleNext();
                          handlePageChange(currentIndex + 1);
                      }}/>
        </>
    );
}

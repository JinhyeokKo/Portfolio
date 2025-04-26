import PageNavi from "./PageNavi.jsx";
import styled from "styled-components";
import SliderWrapper from "./SliderWrapper.jsx";
import usePagination from "../hooks/carousel/usePagination.jsx";
import useGroupedItems from "../hooks/carousel/useGroupedItems.jsx";
import {useEffect} from "react";
import useSwipe from "../hooks/carousel/useSwipe.jsx";

const CarouselContainer = styled.div`
    position: relative;
    overflow: hidden;
    touch-action: auto;
    cursor: ${props => props.$isDragging ? "grabbing" : "grab"};
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
    } = usePagination(items.length, 320, 336);

    const groupedItems = useGroupedItems(items, itemsPerPage);

    const handlePageChange = (newIndex) => {
        if (onPageChange) {
            onPageChange(newIndex);
        }
    };

    const { isDragging, handlers } = useSwipe({
        onSwipeLeft: () => {
            if (currentIndex < totalSlides - 1) {
                handleNext();
                handlePageChange(currentIndex + 1);
            }
        },
        onSwipeRight: () => {
            if (currentIndex > 0) {
                handlePrev();
                handlePageChange(currentIndex - 1);
            }
        }
    });

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

    return (
        <>

            <CarouselContainer ref={containerRef}
                               $isDragging={isDragging}
                               {...handlers}
            >
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

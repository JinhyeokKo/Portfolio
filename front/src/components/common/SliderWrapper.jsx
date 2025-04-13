import React from "react";
import styled from "styled-components";

const Slider = styled.div`
    display: flex;
    justify-content: flex-start;
    transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
    display: flex;
    flex: 0 0 100%;
    box-sizing: border-box;
    padding: 1rem;
`;

export default function SliderWrapper({ groupedItems, currentIndex, renderItem }) {
    return (
        <Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {groupedItems.map((group, groupIndex) => (
                <Slide key={groupIndex}>
                    {group.map((item) => (
                        renderItem(item)
                    ))}
                </Slide>
            ))}
        </Slider>
    );
}

import styled from "styled-components";

const NavContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    align-items: center;
`;

const NavButton = styled.button`
    background: none;
    border: none;
    font-size: 1.2rem;
    opacity: 0.6;
    color: ${(props) => props.theme.textColor};

    &:hover {
        opacity: 1;
    }

    &:disabled {
        opacity: 0.2;
        cursor: default;
    }
`;

const PageInfo = styled.span`
    color: ${(props) => props.theme.textColor};
    font-weight: bold;
`;

const formatNumber = (num) => String(num).padStart(2, "0");

export default function PageNavi({currentIndex, totalSlides, onPrev, onNext}) {
    return (
        <NavContainer>
            <NavButton onClick={onPrev} disabled={currentIndex === 0}>
                &lt;
            </NavButton>
            <PageInfo>
                {formatNumber(currentIndex + 1)} | {formatNumber(totalSlides)}
            </PageInfo>
            <NavButton onClick={onNext} disabled={currentIndex === totalSlides - 1}>
                &gt;
            </NavButton>
        </NavContainer>
    )
}
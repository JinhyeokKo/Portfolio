import styled from "styled-components";

export const Section = styled.section`
    width: 90vw;
    height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;

    @media (min-width: 1024px) {
        padding-left: 20rem;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem; /* 24px -> 1.5rem */
    font-weight: 700;
    margin-bottom: 1rem; /* 16px -> 1rem */
    @media (min-width: 1024px) {
        opacity: 0;
    }
`;

export const ContentTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
`

export const Description = styled.p`
    white-space: pre-wrap;
`;

export const Item = styled.div`
    position: relative;
    background: ${(props) => props.theme.backgroundColor};
    margin: 0 auto;
    padding: 1rem; /* 16px -> 1rem */
    border-radius: 0.5rem; /* 8px -> 0.5rem */
    box-shadow: 0 0.25rem 0.375rem ${(props) => props.theme.shadowColor}; /* 4px 6px -> 0.25rem 0.375rem */
    width: clamp(15rem, 20rem, 25rem);
    height: 25rem;
    flex: 0 0 auto;
    box-sizing: border-box;
    top: 1rem;

    &:hover {
        top: 0;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        transition: top 0.3s ease, box-shadow 0.3s ease;
    }

    &:hover p {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover button {
        opacity: 1;
    }
`;

export const Button = styled.button`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
`;


export const ListItem = styled(Item).attrs({as: "li"})`
    margin-bottom: 1rem;
`;
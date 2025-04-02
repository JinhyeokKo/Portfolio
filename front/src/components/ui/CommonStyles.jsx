import styled from "styled-components";

export const Section = styled.section`
    max-width: 120rem;
    width: 90vw;
    margin: 0 auto;
    padding: 2.5rem;
    box-sizing: border-box;
`;

export const Title = styled.h2`
    font-size: 2.5rem; /* 24px -> 1.5rem */
    font-weight: 700;
    margin-bottom: 1rem; /* 16px -> 1rem */
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
    padding: 1rem; /* 16px -> 1rem */
    border-radius: 0.5rem; /* 8px -> 0.5rem */
    box-shadow: 0 0.25rem 0.375rem ${(props) => props.theme.shadowColor}; /* 4px 6px -> 0.25rem 0.375rem */

    &:hover p {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
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
    transition: opacity 0.3s ease-in-out;
`;


export const ListItem = styled(Item).attrs({as:"li"})`
    margin-bottom: 1rem;
`;
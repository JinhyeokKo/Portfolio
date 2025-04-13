import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 1rem;
    box-sizing: border-box;
    overflow: hidden;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1600px) and (min-width: 1400px) {
        padding-left: 200px;
    }
`

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    @media (min-width: 1400px) {
        //opacity: 0;
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
    background: ${(props) => props.theme.boxBackground};
    margin: 0 1rem 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 2rem 0 ${(props) => props.theme.boxShadow};
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 1px );
    width: 18rem;
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

    @media (max-width: 479px) {
        margin: 0 0 1rem;
        
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
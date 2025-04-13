import {useEffect, useState} from "react";
import styled, {css, keyframes} from "styled-components";
import intro from "../../assets/intro.png"

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 30vw;
    
    @media (max-width: 1400px) {
        width: 70vw;
    }
    animation: ${({ animation }) => {
        if (animation === "fade-in") return css`${fadeIn} 0.5s ease forwards`;
        if (animation === "fade-out") return css`${fadeOut} 1s ease forwards`;
        return "none";
    }};
`;

const Intro = ({ onFinish }) => {
    const [animation, setAnimation] = useState("fade-in");

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setAnimation("fade-out");
        }, 1500);
        const timer = setTimeout(() => {
            onFinish();
        }, 2000);
        return () => {clearTimeout(timer)
        clearTimeout(fadeOutTimer)
        };
    }, [onFinish]);

    return (
        <Wrapper>
            <Image src={intro} $animation={animation} />
        </Wrapper>
    );
};

export default Intro;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiArrowUp } from "react-icons/fi";

const ScrollButton = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    font-size: 2rem;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    border: none;
    border-radius: 50%;
    padding: 0 0.1rem;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
    z-index: 10;
    display: ${(props) => (props.$visible ? "block" : "none")};
    transition: opacity 0.3s ease;
`;

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 700);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <ScrollButton onClick={scrollToTop} $visible={isVisible}>
            <FiArrowUp />
        </ScrollButton>
    );
}

import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiArrowUp } from "react-icons/fi";

const ScrollButton = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    font-size: 2rem;
    background-color: ${(props) => props.theme.itemBgColor};
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
    const [isPC, setIsPC] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsPC(window.innerWidth >= 1024);
        };

        const handleScroll = () => {
            setIsVisible(window.scrollY > 700);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        // 초기 실행
        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // PC가 아니면 렌더링 안 함
    if (!isPC) return null;

    return (
        <ScrollButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} $visible={isVisible}>
            <FiArrowUp />
        </ScrollButton>
    );
}

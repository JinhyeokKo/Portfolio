import styled from "styled-components";
import {useEffect} from "react";
import ReactDOM from "react-dom";

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 11;
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
`;

const ModalContent = styled.div`
    background: ${(props) => props.theme.backgroundColor};
    padding: 0 20vw 0 20vw;
    border-radius: 0.5rem;
    top: 3rem;
    width: 85vw;
    max-height: 85vh;
    overflow-y: auto;
    position: relative;
    box-sizing: border-box;

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE, Edge */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }

    @media (max-width: 48rem) {
        width: 100vw;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10vh;
    right: 5vw;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;

    @media (max-width: 48rem) {
        top: 3rem;
    }
`;

export default function Modal({ isOpen, onClose, children }) {
    // 모달이 열릴 때 페이지 스크롤 막고, 닫힐 때 다시 활성화
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // 컴포넌트가 언마운트될 때 초기화
        };
    }, [isOpen]);

    if (!isOpen) return null; // 모달이 닫혀 있으면 렌더링 안 함

    const modal = (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalContent>
            <CloseButton onClick={onClose}>X</CloseButton>
        </ModalBackground>
    );

    return ReactDOM.createPortal(modal, document.body);
}

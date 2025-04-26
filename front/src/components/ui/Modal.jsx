import styled from "styled-components";
import {useEffect} from "react";
import ReactDOM from "react-dom";
import OrientationToggle from "../screen/OrientationToggle.jsx";

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

    @media (max-width: 48rem) {
        flex-direction: column-reverse;
    }
`;

const ModalContent = styled.div`
    background: ${(props) => props.theme.itemBgColor};
    padding: 3rem 1rem;
    border-radius: 0.5rem;
    top: 3rem;
    width: 85vw;
    max-width: 1920px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-sizing: border-box;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 48rem), (max-height: 48rem) {
        width: 100vw;
        max-height: 100vh;
        top: 0;
        border-radius: 0;
    }
`;

const CloseButton = styled.button`
    position: relative;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    border: none;
    padding: 1rem;
`;

const ButtonBox = styled.div`
    display: flex;
    gap: 1rem;
    left: 1rem;
    top: 3rem;

    @media (max-width: 48rem) {
        top: 0;
        left: 0;
    }
    
    @media (orientation: landscape) {
        position: relative;
        flex-direction: column;
        margin-right: 1rem;
    }
`

export default function Modal({isOpen, onClose, children}) {
    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${scrollY}px`;
            document.body.setAttribute('data-scroll-position', scrollY.toString());
        } else {
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            const scrollY = parseInt(document.body.getAttribute('data-scroll-position') || '0');
            window.scrollTo({
                top: scrollY,
                behavior: 'instant'
            });
        }

        return () => {
            const scrollY = parseInt(document.body.getAttribute('data-scroll-position') || '0');
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            window.scrollTo({
                top: scrollY,
                behavior: 'instant'
            });
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const modal = (
        <div id="screen-wrapper">
        <ModalBackground onClick={(e) => e.stopPropagation()}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalContent>
            <ButtonBox onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>X</CloseButton>
                <OrientationToggle/>
            </ButtonBox>
        </ModalBackground>
        </div>
    );

    return ReactDOM.createPortal(modal, document.body);
}

import styled, {css, keyframes} from "styled-components";

const floatSpin = keyframes`
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(2deg) scale(1.03);
    }
    100% {
        transform: rotate(0deg) scale(1);
    }
`;

const baseStyles = css`
  background: rgba( 255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
  animation: ${floatSpin} 3s ease-in-out infinite;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    opacity 0.3s ease,
    scale 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme?.textColor};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  scale: ${(props) => (props.$visible ? 1 : 0.7)};
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
`;

const RingButton = styled.button`
    ${baseStyles}
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 0.3rem solid ${(props) => props.$borderColor};

    &:hover {
        animation-play-state: paused;
        transform: scale(1.1);
        border-color: ${(props) => props.$hoverColor};
        box-shadow: 0 0.25rem 1rem ${(props) => props.theme.shadowColor};
    }

    &:active {
        transform: scale(1.05);
    }
`;

const RectButton = styled.button`
    ${baseStyles}
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;
    border: 0.25rem solid ${(props) => props.$borderColor};

    &:hover {
        animation-play-state: paused;
        transform: scale(1.05);
        border-color: ${(props) => props.$hoverColor};
        box-shadow: 0 0.25rem 1rem ${(props) => props.theme.shadowColor};
    }

    &:active {
        transform: scale(1.02);
    }
`;

export const WavyRingButton = ({label, color, visible, onClick}) => (
    <RingButton
        onClick={onClick}
        $borderColor={color.base}
        $hoverColor={color.hover}
        $visible={visible}
    >
        {label}
    </RingButton>
);

export const WavyRectButton = ({label, color, visible, onClick}) => (
    <RectButton
        onClick={onClick}
        $borderColor={color.base}
        $hoverColor={color.hover}
        $visible={visible}
    >
        {label}
    </RectButton>
);

export default {WavyRectButton, WavyRingButton}
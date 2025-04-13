import { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const getAnimation = (name, duration = "0.5s", easing = "ease", fill = "forwards") => {
    switch (name) {
        case "fade-in":
            return css`${fadeIn} ${duration} ${easing} ${fill}`;
        case "fade-out":
            return css`${fadeOut} ${duration} ${easing} ${fill}`;
        case "slide-up":
            return css`${slideUp} ${duration} ${easing} ${fill}`;
        default:
            return "none";
    }
};

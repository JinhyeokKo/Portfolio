import { useState } from "react";

export default function useFadeAnimation(initial = "fade-in", duration = 500) {
    const [animation, setAnimation] = useState(initial);

    const triggerFadeOut = (callback) => {
        setAnimation("fade-out");
        setTimeout(() => {
            if (typeof callback === "function") callback();
        }, duration);
    };

    const resetAnimation = () => {
        setAnimation("fade-in");
    };

    return {
        animation,
        setAnimation,
        triggerFadeOut,
        resetAnimation,
    };
}

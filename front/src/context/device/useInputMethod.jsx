import { useState, useEffect } from 'react';

export default function useInputMethod() {
    const [inputMethod, setInputMethod] = useState('unknown');

    useEffect(() => {
        const handleInputMethod = (event) => {
            if (event.type === "touchstart") {
                setInputMethod("touch");
            } else if (event.type === "mousemove") {
                setInputMethod("mouse");
            }

            window.removeEventListener("touchstart", handleInputMethod);
            window.removeEventListener("mousemove", handleInputMethod);
        };

        window.addEventListener("touchstart", handleInputMethod, { passive: true });
        window.addEventListener("mousemove", handleInputMethod);

        return () => {
            window.removeEventListener("touchstart", handleInputMethod);
            window.removeEventListener("mousemove", handleInputMethod);
        };
    }, []);

    return inputMethod;
}
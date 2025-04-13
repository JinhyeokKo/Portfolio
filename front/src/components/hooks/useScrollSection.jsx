import {useEffect, useState} from "react";

export default function useScrollSection(sectionIds, hiddenUntilSections) {
    const [currentSection, setCurrentSection] = useState(sectionIds[0] || "");
    const [showNavi, setShowNavi] = useState(false);

    useEffect(() => {
        const hiddenSections = Array.isArray(hiddenUntilSections)
            ? hiddenUntilSections
            : [hiddenUntilSections];

        const handleScroll = () => {
            let current = sectionIds[0] || "";

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.getBoundingClientRect().top;
                    if (top < window.innerHeight / 2) {
                        current = id;
                    }
                }
            }

            setCurrentSection(current);
            setShowNavi(!hiddenSections.includes(current));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds, hiddenUntilSections]);

    return { currentSection, showNavi };
}
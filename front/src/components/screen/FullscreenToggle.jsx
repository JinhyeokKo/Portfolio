import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {MdFullscreen, MdFullscreenExit} from "react-icons/md";
import {enterFullscreen, exitFullscreen, isFullscreen} from "./screenUtils.jsx";

const ToggleButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.theme.textColor};
    padding: 0;
    font-size: 2rem;
`;

export default function FullscreenToggle() {
    const [isFull, setIsFull] = useState(isFullscreen());

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFull(isFullscreen());
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = async () => {
        if (isFullscreen()) {
            await exitFullscreen();
        } else {
            await enterFullscreen();
        }
    };

    return (
        <ToggleButton onClick={toggleFullscreen}>
            {isFull ? <MdFullscreenExit/> : <MdFullscreen/>}
        </ToggleButton>
    );
};
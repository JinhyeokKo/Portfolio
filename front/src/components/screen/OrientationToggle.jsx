import { useState } from 'react';
import styled from 'styled-components';
import { MdScreenRotation, MdScreenLockPortrait } from 'react-icons/md';
import { enterFullscreen, isFullscreen } from './screenUtils.jsx';

const ToggleButton = styled.button`
    background: ${(props) => props.theme.bgColor};
    border: none;
    color: ${(props) => props.theme.textColor};
    padding: 1rem;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    
    @media (max-width: 48rem), (max-height: 48rem) {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }
`;

export default function OrientationToggle() {
    const [isLandscape, setIsLandscape] = useState(false);

    const toggleOrientation = async () => {
        try {
            if (!screen.orientation || !screen.orientation.lock) {
                alert("이 브라우저는 orientation lock을 지원하지 않습니다.");
                return;
            }

            const fullscreenTarget = document.getElementById('screen-wrapper');
            if (!isFullscreen()) {
                await enterFullscreen(fullscreenTarget);
                await new Promise(resolve => setTimeout(resolve, 300));
            }

            await screen.orientation.lock(isLandscape ? 'portrait' : 'landscape');
            setIsLandscape(prev => !prev);
        } catch (err) {
            console.error('Orientation lock error:', err.name, err.message);
            alert('이 브라우저는 orientation lock을 지원하지 않습니다.');
        }
    };

    return (
        <ToggleButton onClick={toggleOrientation}>
            {isLandscape ? <MdScreenLockPortrait /> : <MdScreenRotation />}
        </ToggleButton>
    );
}
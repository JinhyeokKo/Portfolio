import { useState, useRef, useEffect } from 'react';
import useDevice from '../../../context/device/useDevice.jsx';

export default function useSwipe({
                                     onSwipeLeft,
                                     onSwipeRight,
                                     minSwipeDistance = 50,
                                     maxVerticalMovement = 100
                                 }) {
    const { inputDevice } = useDevice();
    const isTouchDevice = inputDevice === 'touch';
    const [isDragging, setIsDragging] = useState(false);

    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const touchEndX = useRef(0);
    const touchEndY = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        touchEndX.current = e.touches[0].clientX;
        touchEndY.current = e.touches[0].clientY;
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        touchEndX.current = e.touches[0].clientX;
        touchEndY.current = e.touches[0].clientY;

        const deltaX = Math.abs(touchEndX.current - touchStartX.current);
        const deltaY = Math.abs(touchEndY.current - touchStartY.current);

        if (deltaX > deltaY) {
            e.preventDefault();
        }
    };

    const handleMouseDown = (e) => {
        if (isTouchDevice) return;
        touchStartX.current = e.pageX;
        touchStartY.current = e.pageY;
        touchEndX.current = e.pageX;
        touchEndY.current = e.pageY;
        setIsDragging(true);
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging || isTouchDevice) return;
        touchEndX.current = e.pageX;
        touchEndY.current = e.pageY;
    };

    const handleEnd = () => {
        if (!isDragging || isTouchDevice) return;
        setIsDragging(false);

        const horizontalDistance = touchStartX.current - touchEndX.current;
        const verticalDistance = Math.abs(touchStartY.current - touchEndY.current);

        if (Math.abs(horizontalDistance) >= minSwipeDistance && verticalDistance <= maxVerticalMovement) {
            if (horizontalDistance > 0) {
                onSwipeLeft?.();
            } else {
                onSwipeRight?.();
            }
        }
    };

    useEffect(() => {
        const preventDefault = (e) => {
            if (isDragging) {
                e.preventDefault();
            }
        };

        if (isTouchDevice) {
            document.addEventListener('touchmove', preventDefault, { passive: false });
        }

        return () => {
            if (isTouchDevice) {
                document.removeEventListener('touchmove', preventDefault);
            }
        };
    }, [isDragging, isTouchDevice]);

    const handlers = {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleEnd,
        onTouchCancel: handleEnd,
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleEnd,
        onMouseLeave: handleEnd
    };

    return { isDragging, handlers };
}
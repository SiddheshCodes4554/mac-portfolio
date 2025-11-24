import { useEffect, useRef } from 'react';
import useWindowStore from '#constants/store/window';

const useDoubleEscape = () => {
    const { windows, closeWindow } = useWindowStore();
    const lastEscapePress = useRef(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                const now = Date.now();
                if (now - lastEscapePress.current < 300) {
                    // Double press detected

                    // Find the open window with the highest z-index
                    let topWindowId = null;
                    let maxZIndex = -1;

                    Object.entries(windows).forEach(([id, win]) => {
                        if (win.isOpen && !win.isMinimized && win.zIndex > maxZIndex) {
                            maxZIndex = win.zIndex;
                            topWindowId = id;
                        }
                    });

                    if (topWindowId) {
                        closeWindow(topWindowId);
                    }

                    // Reset to prevent triple-click triggering twice
                    lastEscapePress.current = 0;
                } else {
                    lastEscapePress.current = now;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [windows, closeWindow]);
};

export default useDoubleEscape;

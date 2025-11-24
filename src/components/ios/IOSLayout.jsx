import React from 'react';
import IOSStatusBar from './IOSStatusBar';
import IOSDock from './IOSDock';
import IOSHomeScreen from './IOSHomeScreen';
import useWindowStore from '#constants/store/window.js';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from '#windows/index.js';

const IOSLayout = () => {
    const { windows, closeWindow } = useWindowStore();

    const openWindows = Object.entries(windows).filter(([_, win]) => win.isOpen);
    // For iOS, we just take the last opened window as the active one
    const activeAppEntry = openWindows.length > 0 ? openWindows[openWindows.length - 1] : null;
    const activeAppId = activeAppEntry ? activeAppEntry[0] : null;

    const renderActiveApp = () => {
        if (!activeAppId) return null;

        const AppComponents = {
            finder: Finder,
            resume: Resume,
            safari: Safari,
            terminal: Terminal,
            txtfile: Text,
            imgfile: Image,
            contact: Contact,
            photos: Photos
        };

        const Component = AppComponents[activeAppId];
        if (!Component) return null;

        return (
            <DraggableAppWindow
                activeAppId={activeAppId}
                closeWindow={closeWindow}
                Component={Component}
            />
        );
    };

    return (
        <div className="w-full h-screen bg-[url('/images/wallpaper.png')] bg-cover bg-center overflow-hidden relative font-sans">
            <div className="absolute inset-0 bg-black/10" />

            <IOSStatusBar />

            <div className="h-full pb-32 pt-4">
                <IOSHomeScreen />
            </div>

            <IOSDock />

            {renderActiveApp()}
        </div>
    );
};

// Separate component to handle Draggable logic cleanly
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import { ChevronLeft } from 'lucide-react';

const DraggableAppWindow = ({ activeAppId, closeWindow, Component }) => {
    const containerRef = useRef(null);
    const windowRef = useRef(null);

    useEffect(() => {
        if (!windowRef.current) return;

        const element = windowRef.current;

        // Initial animation
        gsap.fromTo(element,
            { y: '100%' },
            { y: '0%', duration: 0.4, ease: 'power3.out' }
        );

        const draggable = Draggable.create(element, {
            type: 'y',
            bounds: { minY: 0, maxY: window.innerHeight },
            inertia: true,
            onDragEnd: function () {
                if (this.y > 150) { // Threshold to close
                    gsap.to(element, {
                        y: '100%',
                        duration: 0.3,
                        ease: 'power2.in',
                        onComplete: () => closeWindow(activeAppId)
                    });
                } else {
                    // Snap back
                    gsap.to(element, {
                        y: 0,
                        duration: 0.3,
                        ease: 'power3.out'
                    });
                }
            }
        })[0];

        return () => {
            draggable.kill();
        };
    }, [activeAppId, closeWindow]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div
                ref={windowRef}
                className="w-full h-full relative bg-white overflow-hidden rounded-[40px] mt-8 mb-2 mx-auto max-w-[98%] shadow-2xl"
            >
                {/* Back Button */}
                <button
                    onClick={() => {
                        gsap.to(windowRef.current, {
                            y: '100%',
                            duration: 0.3,
                            ease: 'power2.in',
                            onComplete: () => closeWindow(activeAppId)
                        });
                    }}
                    className="absolute top-4 left-4 w-10 h-10 bg-gray-200/80 backdrop-blur-md rounded-full flex items-center justify-center z-[60] text-black shadow-sm active:scale-90 transition-transform"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Close button (X) - Keeping it as requested/optional, or replacing? 
                    User asked for "back buttons to close", usually implies replacing X or adding to it. 
                    I'll keep X as well for now but maybe move it or style it differently? 
                    Actually, let's keep the X on the right as it was, and add Back on left.
                */}
                <button
                    onClick={() => closeWindow(activeAppId)}
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-200/50 backdrop-blur-md rounded-full flex items-center justify-center z-[60] text-black font-bold"
                >
                    ✕
                </button>

                {/* Drag Handle Indicator at Top */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-300/50 rounded-full z-[60]" />

                <div className="w-full h-full pt-16 pb-8">
                    <Component isMobile={true} />
                </div>

                {/* Home Indicator */}
                <div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black/20 rounded-full z-[60] cursor-pointer"
                    onClick={() => closeWindow(activeAppId)}
                />
            </div>
        </div>
    );
};

export default IOSLayout;

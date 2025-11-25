import React, { use, useLayoutEffect } from 'react'
import useWindowStore from '#constants/store/window.js';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/all';


const WindowWrapper = (Component, windowKey) => {

    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex, isMinimized, isMaximized } = windows[windowKey];
        const ref = useRef(null);
        const isMounted = useRef(false);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (isOpen && !isMinimized) {
                // Open Animation
                el.style.display = 'block';
                gsap.killTweensOf(el); // Kill any ongoing animations
                gsap.fromTo(
                    el,
                    { scale: 0.8, opacity: 0, y: 0 }, // Removed y: 40 for a cleaner pop
                    { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.2)' }
                );
            } else if (!isOpen) {
                // Close Animation
                // Prevent flash on load: if not mounted yet, hide immediately without animation
                if (!isMounted.current) {
                    el.style.display = 'none';
                    el.style.opacity = 0;
                    el.style.transform = 'scale(0.8)';
                } else if (el.style.display !== 'none') {
                    // Only animate if it's currently visible
                    gsap.to(el, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.2,
                        ease: 'power2.in',
                        onComplete: () => {
                            el.style.display = 'none';
                        }
                    });
                } else {
                    el.style.display = 'none';
                }
            } else if (isMinimized) {
                // Minimize logic (immediate hide for now, or could animate)
                el.style.display = 'none';
            }

            if (!isMounted.current) {
                isMounted.current = true;
            }

        }, [isOpen, isMinimized]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (props.isMobile) return; // Disable draggable on mobile

            const [instance] = Draggable.create(el, {
                onpress: () => focusWindow(windowKey),
                disabled: isMaximized // Disable dragging when maximized
            });

            return () => instance.kill();

        }, [isMaximized, props.isMobile]) // Re-run when isMaximized changes to update draggable state


        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            if (props.isMobile) {
                el.style.width = '100%';
                el.style.height = '100%';
                el.style.top = '0';
                el.style.left = '0';
                el.style.transform = 'none';
                // Mobile visibility is handled by the isOpen check above mostly, 
                // but we need to ensure it's visible if open.
                // Actually, the GSAP hook above handles display block/none.
                // We just need to ensure styles are correct.
                if (isOpen) el.style.display = 'block';
                return;
            }

            if (isMaximized) {
                el.style.width = '100%';
                el.style.height = '100%';
                el.style.top = '0';
                el.style.left = '0';
                el.style.transform = 'none'; // Reset transform from draggable
            } else {
                if (el.style.width === '100%') el.style.width = '';
                if (el.style.height === '100%') el.style.height = '';
                if (el.style.top === '0px') el.style.top = '';
                if (el.style.left === '0px') el.style.left = '';
            }

        }, [isMaximized, props.isMobile, isOpen]);

        return (
            <section id={windowKey} ref={ref} style={{ zIndex }} className='absolute'>
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'}`;

    return Wrapped;
};

export default WindowWrapper

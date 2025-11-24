import { dockApps } from '#constants';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import React from 'react'
import { Tooltip } from 'react-tooltip';
import { gsap } from 'gsap';
import useWindowStore from '#constants/store/window.js';

const Dock = () => {
    const { openWindow, closeWindow, windows } = useWindowStore();

    const dockRef = React.useRef(null);

    // GSAP animation removed in favor of simple CSS hover effect
    // useGSAP(() => { ... }, []);

    const toggleApp = (app) => {

        if (!app.canOpen) return;

        const window = windows[app.id];

        if (!window) {
            console.error(`Window with id "${app.id}" does not exist.`);
            return;
        }

        if (window.isOpen) {
            if (window.isMinimized) {
                // If minimized, restore it
                useWindowStore.getState().restoreWindow(app.id);
            } else {
                // If open and not minimized, close it (or maybe minimize it? Mac behavior is usually to focus if not focused, or do nothing if focused. But here toggling might mean close)
                // Let's stick to close for now as per previous logic, or maybe minimize?
                // The previous logic was closeWindow(app.id).
                // Let's keep it as closeWindow for now, but if it's not focused, maybe focus it?
                // For now, let's just handle the restore case.
                closeWindow(app.id);
            }
        } else {
            openWindow(app.id);
        }

        console.log(windows);
    };

    return (
        <section id='dock'>
            <div ref={dockRef} className='dock-container'>
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className='relative flex justify-center'>
                        <button
                            type='button'
                            className='dock-icon transition-all duration-200 ease-out hover:scale-125 hover:-translate-y-4 origin-bottom'
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img
                                src={`/images/${icon}`}
                                alt={name}
                                loading='lazy'
                                className={canOpen ? '' : 'opacity-60'}
                            />
                        </button>
                    </div>
                ))}
                <Tooltip id='dock-tooltip' place="top" className='tooltip' />
            </div>
        </section>
    )
}

export default Dock

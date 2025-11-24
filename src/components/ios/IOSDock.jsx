import React from 'react';
import { dockApps } from '#constants';
import useWindowStore from '#constants/store/window.js';

const IOSDock = () => {
    const { openWindow } = useWindowStore();

    // Take first 4 apps for the dock
    const dockItems = dockApps.slice(0, 4);

    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-24 bg-white/20 backdrop-blur-xl rounded-[35px] flex items-center justify-around px-4 z-40 border border-white/10">
            {dockItems.map((app) => (
                <button
                    key={app.id}
                    onClick={() => openWindow(app.id)}
                    className="w-16 h-16 rounded-2xl overflow-hidden transition-transform active:scale-90"
                >
                    <img src={`/images/${app.icon}`} alt={app.name} className="w-full h-full object-cover" />
                </button>
            ))}
        </div>
    );
};

export default IOSDock;

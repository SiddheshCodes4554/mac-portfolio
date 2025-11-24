import React from 'react';
import { dockApps } from '#constants';
import useWindowStore from '#constants/store/window.js';

const IOSHomeScreen = () => {
    const { openWindow } = useWindowStore();

    return (
        <div className="w-full h-full pt-16 px-6 grid grid-cols-4 gap-y-8 gap-x-4 content-start">
            {dockApps.map((app) => (
                <div key={app.id} className="flex flex-col items-center gap-1">
                    <button
                        onClick={() => openWindow(app.id)}
                        className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-90 bg-white relative z-10"
                    >
                        <img
                            src={app.id === 'finder' ? '/images/folder.png' : `/images/${app.icon}`}
                            alt={app.name}
                            className="w-full h-full object-cover"
                        />
                    </button>
                    <span className="text-xs text-white font-medium tracking-tight drop-shadow-md">
                        {app.id === 'finder' ? 'Files' : app.name}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default IOSHomeScreen;

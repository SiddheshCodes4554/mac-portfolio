import React, { useState, useEffect } from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';

const IOSStatusBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full h-12 px-6 flex justify-between items-center text-white text-sm font-medium z-50 absolute top-0 left-0">
            <div className="tracking-wide">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <div className="flex items-center gap-2">
                <Signal size={16} fill="currentColor" />
                <Wifi size={16} />
                <Battery size={20} fill="currentColor" />
            </div>
        </div>
    );
};

export default IOSStatusBar;

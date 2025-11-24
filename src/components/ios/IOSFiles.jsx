import React, { useState } from 'react';
import { Search, ChevronRight, ChevronLeft, MoreHorizontal, Folder, ArrowLeft } from 'lucide-react';
import { locations } from '#constants';
import useWindowStore from '#constants/store/window';
import useLocationStore from '#constants/store/location';
import clsx from 'clsx';

const IOSFiles = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    // Internal navigation state
    // view: 'browse' (root) | 'folder' (specific location)
    const [view, setView] = useState('browse');
    const [currentFolder, setCurrentFolder] = useState(null);

    const handleLocationClick = (loc) => {
        setCurrentFolder(loc);
        setView('folder');
    };

    const handleBack = () => {
        if (view === 'folder') {
            setView('browse');
            setCurrentFolder(null);
        }
    };

    const openItem = (item) => {
        if (item.kind === 'folder') {
            setCurrentFolder(item);
            return; // Stay in folder view, just update current folder
        }
        if (item.fileType === 'pdf') return openWindow('resume');
        if (['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");

        openWindow(`${item.fileType}${item.kind}`, item);
    };

    const renderBrowseView = () => (
        <div className="flex flex-col h-full bg-black text-white">
            {/* Header */}
            <div className="px-4 pt-4 pb-2">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-4xl font-bold">Browse</h1>
                    <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-500">
                        <MoreHorizontal size={20} />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-[#1c1c1e] text-white pl-10 pr-4 py-2 rounded-xl border-none outline-none placeholder-gray-500"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 pb-20">
                {/* Portfolio Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-3 ml-1">Portfolio</h2>
                    <div className="bg-[#1c1c1e] rounded-xl overflow-hidden">
                        <div
                            className="flex items-center p-3 border-b border-gray-700/50 active:bg-gray-700 transition-colors cursor-pointer"
                            onClick={() => handleLocationClick(locations.work)}
                        >
                            <img src="/images/folder.png" className="w-8 h-8 mr-3" alt="Work" />
                            <span className="flex-1 text-lg">Work</span>
                            <ChevronRight className="text-gray-500" size={20} />
                        </div>
                        <div
                            className="flex items-center p-3 active:bg-gray-700 transition-colors cursor-pointer"
                            onClick={() => handleLocationClick(locations.trash)}
                        >
                            <img src="/images/trash.png" className="w-8 h-8 mr-3" alt="Recently Deleted" />
                            <span className="flex-1 text-lg">Recently Deleted</span>
                            <ChevronRight className="text-gray-500" size={20} />
                        </div>
                    </div>
                </div>

                {/* Favourites Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-3 ml-1">Favourites</h2>
                    <div className="bg-[#1c1c1e] rounded-xl overflow-hidden">
                        <div
                            className="flex items-center p-3 border-b border-gray-700/50 active:bg-gray-700 transition-colors cursor-pointer"
                            onClick={() => handleLocationClick(locations.about)}
                        >
                            <div className="w-8 h-8 mr-3 flex items-center justify-center bg-blue-500 rounded-full">
                                <Folder size={18} className="text-white" />
                            </div>
                            <span className="flex-1 text-lg">About Me</span>
                            <ChevronRight className="text-gray-500" size={20} />
                        </div>
                        <div
                            className="flex items-center p-3 active:bg-gray-700 transition-colors cursor-pointer"
                            onClick={() => handleLocationClick(locations.resume)}
                        >
                            <div className="w-8 h-8 mr-3 flex items-center justify-center bg-blue-500 rounded-full">
                                <Folder size={18} className="text-white" />
                            </div>
                            <span className="flex-1 text-lg">Resume</span>
                            <ChevronRight className="text-gray-500" size={20} />
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-3 ml-1">Projects</h2>
                    <div className="bg-[#1c1c1e] rounded-xl overflow-hidden">
                        {locations.work.children.map((project, index) => (
                            <div
                                key={project.id}
                                className={clsx("flex items-center p-3 active:bg-gray-700 transition-colors cursor-pointer", index !== locations.work.children.length - 1 && "border-b border-gray-700/50")}
                                onClick={() => handleLocationClick(project)}
                            >
                                <div className={`w-3 h-3 rounded-full mr-4 bg-blue-500`} />
                                <span className="flex-1 text-lg">{project.name}</span>
                                <ChevronRight className="text-gray-500" size={20} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Tab Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#1c1c1e]/90 backdrop-blur-md border-t border-gray-700 flex justify-around items-start pt-2 z-20">
                <button
                    className="flex flex-col items-center gap-1 text-blue-500 active:opacity-70"
                    onClick={handleBack}
                >
                    <ArrowLeft size={24} />
                    <span className="text-[10px]">Back</span>
                </button>
                <div className="flex flex-col items-center gap-1 text-blue-500">
                    <Folder size={24} fill="currentColor" />
                    <span className="text-[10px]">Files</span>
                </div>
            </div>
        </div>
    );

    const renderFolderView = () => (
        <div className="flex flex-col h-full bg-black text-white">
            {/* Header */}
            <div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-gray-800 bg-[#1c1c1e]/50 backdrop-blur-md sticky top-0 z-10">
                <button
                    onClick={handleBack}
                    className="flex items-center text-blue-500 -ml-2"
                >
                    <ChevronLeft size={28} />
                    <span className="text-lg">Browse</span>
                </button>
                <h1 className="text-lg font-semibold absolute left-1/2 -translate-x-1/2 max-w-[50%] truncate">
                    {currentFolder?.name || 'Folder'}
                </h1>
                <button className="text-blue-500">
                    <MoreHorizontal size={24} />
                </button>
            </div>

            {/* Search Bar */}
            <div className="px-4 py-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-[#1c1c1e] text-white pl-10 pr-4 py-2 rounded-xl border-none outline-none placeholder-gray-500"
                    />
                </div>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto px-4 pb-20">
                <div className="mt-2">
                    {currentFolder?.children?.length > 0 ? (
                        <div className="grid grid-cols-3 gap-4">
                            {currentFolder.children.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-center gap-2 p-2 active:bg-gray-800 rounded-xl transition-colors"
                                    onClick={() => openItem(item)}
                                >
                                    <img src={item.icon} alt={item.name} className="w-16 h-16 object-contain" />
                                    <span className="text-xs text-center text-gray-300 line-clamp-2 break-words w-full">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                            <Folder size={48} className="mb-2 opacity-50" />
                            <p>No items</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Tab Bar (Same as Browse) */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#1c1c1e]/90 backdrop-blur-md border-t border-gray-700 flex justify-around items-start pt-2 z-20">
                <button
                    className="flex flex-col items-center gap-1 text-blue-500 active:opacity-70"
                    onClick={handleBack}
                >
                    <ArrowLeft size={24} />
                    <span className="text-[10px]">Back</span>
                </button>
                <div className="flex flex-col items-center gap-1 text-blue-500">
                    <Folder size={24} fill="currentColor" />
                    <span className="text-[10px]">Files</span>
                </div>
            </div>
        </div>
    );

    return view === 'browse' ? renderBrowseView() : renderFolderView();
};

export default IOSFiles;

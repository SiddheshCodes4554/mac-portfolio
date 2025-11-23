import React from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#constants/store/window'

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    if (!data) return null;

    return (
        <div className="w-full h-full bg-white flex flex-col">
            <div id="window-header" className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
                <WindowControls target="imgfile" />
                <span className="text-sm font-medium text-gray-700">{data.name}</span>
                <div className="w-14"></div> {/* Spacer for centering */}
            </div>

            <div className="flex-1 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
                <img
                    src={data.imageUrl}
                    alt={data.name}
                    className="max-w-full max-h-full object-contain shadow-lg"
                />
            </div>
        </div>
    )
}

export default WindowWrapper(Image, 'imgfile')

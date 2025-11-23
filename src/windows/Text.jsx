import React from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#constants/store/window'

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    return (
        <div className="w-full h-full bg-white flex flex-col">
            <div id="window-header" className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
                <WindowControls target="txtfile" />
                <span className="text-sm font-medium text-gray-700">{data.name}</span>
                <div className="w-14"></div> {/* Spacer for centering */}
            </div>

            <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-2xl mx-auto space-y-6">
                    {data.image && (
                        <img
                            src={data.image}
                            alt={data.name}
                            className="w-64 h-64 object-cover mx-auto shadow-md"
                        />
                    )}

                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-bold text-gray-900">{data.name.replace('.txt', '')}</h1>
                        {data.subtitle && (
                            <p className="text-gray-500 font-medium">{data.subtitle}</p>
                        )}
                    </div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        {data.description && data.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowWrapper(Text, 'txtfile')

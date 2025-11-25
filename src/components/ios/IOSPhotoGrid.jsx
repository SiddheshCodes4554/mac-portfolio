import React from 'react';
import { gallery } from '#constants/index.js';
import useWindowStore from '#constants/store/window';

const IOSPhotoGrid = () => {
    const { openWindow } = useWindowStore();

    return (
        <div className="w-full h-full bg-white text-black font-sans overflow-y-auto">
            <div className="grid grid-cols-3 gap-[1px]">
                {gallery.map(({ id, img }, index) => (
                    <div
                        key={id}
                        className="aspect-square relative overflow-hidden cursor-pointer"
                        onClick={() =>
                            openWindow("imgfile", {
                                id,
                                name: "Gallery image",
                                icon: "/images/image.png",
                                kind: "file",
                                fileType: 'img',
                                imageUrl: img,
                            })
                        }
                    >
                        <img
                            src={img}
                            alt={`Gallery image ${id}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IOSPhotoGrid;

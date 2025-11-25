import { Mail, Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components/index.js";
import { gallery, photosLinks } from '#constants/index.js';
import useWindowStore from "#constants/store/window";
import clsx from 'clsx';
import IOSPhotoGrid from "#components/ios/IOSPhotoGrid";

const Photos = (props) => {
    const { openWindow } = useWindowStore();

    if (props.isMobile) {
        return <IOSPhotoGrid />;
    }

    return (
        <div className="w-full h-full flex flex-col bg-white">
            <div id="window-header" className="flex-none p-2 border-b border-gray-200">
                {!props.isMobile && <WindowControls target="photos" />}

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className={clsx('flex-1 flex overflow-hidden', props.isMobile ? 'flex-col' : '')}>
                <div className={clsx('sidebar', props.isMobile ? 'w-full flex-none overflow-x-auto p-2 gap-4 border-b border-gray-200 flex flex-row items-center' : 'h-full overflow-y-auto w-48 flex-none border-r border-gray-200')}>
                    <h2 className={props.isMobile ? 'hidden' : 'p-4 font-bold text-lg'}>Photos</h2>

                    <ul className={props.isMobile ? 'flex gap-4' : 'p-2 space-y-2'}>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id} className={clsx('cursor-pointer hover:bg-gray-100 rounded-md p-2 transition-colors', props.isMobile ? 'flex flex-col items-center gap-1 min-w-[60px]' : 'flex items-center gap-3')}>
                                <img src={icon} alt={title} className={props.isMobile ? 'w-6 h-6' : 'w-5 h-5'} />
                                <p className={props.isMobile ? 'text-[10px]' : 'text-sm'}>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={clsx('gallery flex-1 overflow-y-auto bg-gray-50', props.isMobile ? 'p-2' : 'p-4')}>
                    <ul className={props.isMobile ? 'grid grid-cols-3 gap-1 pb-20' : 'grid grid-cols-4 gap-4'}>
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                className="aspect-square w-full h-full relative group overflow-hidden rounded-md cursor-pointer"
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
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
PhotosWindow.displayName = "Photos";

export default PhotosWindow;
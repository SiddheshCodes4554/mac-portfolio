import { Mail, Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components/index.js";
import { gallery, photosLinks } from '#constants/index.js';
import useWindowStore from "#constants/store/window";
import clsx from 'clsx';

const Photos = (props) => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                {!props.isMobile && <WindowControls target="photos" />}

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className={clsx('flex w-full h-full overflow-hidden', props.isMobile ? 'flex-col pt-14' : '')}>
                <div className={clsx('sidebar', props.isMobile ? 'w-full h-auto flex-row overflow-x-auto p-2 gap-4 border-b border-gray-200 flex-shrink-0' : 'h-full overflow-y-auto')}>
                    <h2 className={props.isMobile ? 'hidden' : ''}>Photos</h2>

                    <ul className={props.isMobile ? 'flex gap-4' : ''}>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id} className={props.isMobile ? 'flex-col items-center gap-1 min-w-[60px]' : ''}>
                                <img src={icon} alt={title} className={props.isMobile ? 'w-6 h-6' : ''} />
                                <p className={props.isMobile ? 'text-[10px]' : ''}>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={clsx('gallery flex-1 overflow-y-auto', props.isMobile ? 'p-2' : '')}>
                    <ul className={props.isMobile ? 'grid grid-cols-3 gap-2 pb-20' : ''}>
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                className={props.isMobile ? 'aspect-square w-full h-full' : ''}
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
                                <img src={img} alt={`Gallery image ${id}`} className={props.isMobile ? 'w-full h-full object-cover rounded-md' : ''} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
PhotosWindow.displayName = "Photos";

export default PhotosWindow;
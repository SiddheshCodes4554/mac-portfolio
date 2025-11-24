import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import { socials } from '#constants';
import { WindowControls } from '#components';
import clsx from 'clsx';

const Contact = (props) => {
    return (
        <>
            <div id='window-header'>
                {!props.isMobile && <WindowControls target="contact" />}
                <h2>Contact Me</h2>
            </div>

            <div className={clsx('p-5 space-y-5', props.isMobile ? 'flex flex-col items-center text-center' : '')}>
                <img
                    src="/images/adrian.jpg"
                    alt='Adrian'
                    className='w-20 rounded-full'
                />

                <h3>Let's Connect</h3>
                <p>Got an idea? A bug or squash? Or just wanna talk?
                    i'm in.</p>
                <p className="break-all">siddheshgawade4554@gmail.com</p>

                <ul className={props.isMobile ? 'justify-center' : ''}>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a
                                href={link}
                                target='_blank'
                                rel="noopener noreferrer"
                                title={text}
                            >
                                <img src={icon} alt={text} className='size-5' />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

        </>
    );
};

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;

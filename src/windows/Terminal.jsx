import { techStack } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react'
import { Check } from 'lucide-react';
import { Flag } from 'lucide-react';
import { WindowControls } from '#components/index.js';
import clsx from 'clsx';


const Terminal = (props) => {
    return (
        <>
            <div id='window-header'>
                {!props.isMobile && <WindowControls target="terminal" />}
                <h2>Tech Stack</h2>
            </div>

            <div className='techstack'>
                <p>
                    <span className='font-bold'>@siddhesh % </span>
                    show tech stack
                </p>

                <div className={clsx('label', props.isMobile ? 'hidden' : '')}>
                    <p className='w-32'>Category</p>
                    <p>Technologies</p>
                </div>

                <ul className='content'>
                    {techStack.map(({ category, items }) => (
                        <li key={category} className={clsx('flex', props.isMobile ? 'flex-col items-start gap-1 py-2 border-b border-gray-700/50' : 'items-center')}>
                            <div className="flex items-center gap-2 min-w-[120px]">
                                <Check className='check' size={20} />
                                <h3 className={props.isMobile ? 'text-green-400 font-bold' : ''}>{category}</h3>
                            </div>
                            <ul className={props.isMobile ? 'pl-7 flex flex-wrap gap-2' : ''}>
                                {items.map((item, i) => (
                                    <li key={i} className={props.isMobile ? 'text-gray-300' : ''}>
                                        {item}
                                        {i < items.length - 1 ? "," : ""}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className='footnote'>
                    <p>
                        <Check size={20} /> 7 of 7 Stacks loaded successfully.
                        (100%)
                    </p>

                    <p className='text-black'>
                        <Flag size={15} fill='black' />
                        Render time: 5ms
                    </p>

                </div>

            </div>
        </>
    );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;

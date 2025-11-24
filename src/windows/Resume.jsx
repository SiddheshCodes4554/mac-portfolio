import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import { WindowControls } from '#components/index.js';
import { Download } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import clsx from 'clsx';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = (props) => {
  return (
    <>
      <div id='window-header'>
        {!props.isMobile && <WindowControls target='resume' />}
        <h2>Resume.pdf</h2>

        <a
          href="files/Siddhesh_Resume_Updated.pdf"
          download
          className='cursor-pointer'
          title='Download Resume'>
          <Download className='icon' />
        </a>
      </div>

      <div className={clsx('w-full h-full overflow-y-auto', props.isMobile ? 'p-2' : '')}>
        <Document file="files/Siddhesh_Resume_Updated.pdf" className="flex justify-center">
          <Page
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
            scale={props.isMobile ? 0.6 : 1.0}
          />
        </Document>
      </div>

    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow

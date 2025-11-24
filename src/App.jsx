import React from 'react'
import { Navbar, Welcome, Dock, Home } from '#components/index.js';
import { IOSLayout } from '#components/ios/index.js';
import useDevice from './hooks/useDevice';
import { Draggable } from 'gsap/all';
import { gsap } from 'gsap';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from '#windows/index.js';
import useDoubleEscape from './hooks/useDoubleEscape';

gsap.registerPlugin(Draggable);

const App = () => {
  const { isMobile } = useDevice();
  useDoubleEscape();

  if (isMobile) {
    return <IOSLayout />;
  }

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />

      <Home />
    </main>
  )
}

export default App;

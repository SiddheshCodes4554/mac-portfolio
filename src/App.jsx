import React from 'react'
import { Navbar, Welcome, Dock, Home } from '#components/index.js';
import { Draggable } from 'gsap/all';
import { gsap } from 'gsap';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from '#windows/index.js';

gsap.registerPlugin(Draggable);

const App = () => {
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

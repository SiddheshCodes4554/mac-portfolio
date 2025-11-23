import React from 'react'
import { Navbar, Welcome, Dock } from '#components/index.js';
import { Draggable } from 'gsap/all';
import { gsap } from 'gsap';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from '#windows/index.js';

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
    </main>
  )
}

export default App;

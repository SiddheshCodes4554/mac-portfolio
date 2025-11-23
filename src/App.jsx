import React from 'react'
import { Navbar, Welcome, Dock } from '#components/index.js';
import { Draggable } from 'gsap/all';
import { gsap } from 'gsap';
import { Terminal } from '#windows/index.js';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>  
  )
}

export default App;

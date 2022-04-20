import React, { useRef } from 'react'

import hubble from './assets/hubble.jpeg'

import Home from './components/Home'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './styles/global.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const parallax = useRef(!null)

  return (
    <div>
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={0} speed={0} factor={3} className="background" />
        <ParallaxLayer
          offset={0}
          speed={1}
          onClick={() => parallax.current.scrollTo(1)}
        >
          <Home />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.3}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <Bio />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          onClick={() => parallax.current.scrollTo(3)}
        >
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={-0.1}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App

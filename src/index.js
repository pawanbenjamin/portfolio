import React from 'react'

import App from './App'

import { ParallaxProvider } from 'react-scroll-parallax'

// ReactDOM.render(
//   <React.StrictMode>
//     <ParallaxProvider>
//       <App />
//     </ParallaxProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App />)

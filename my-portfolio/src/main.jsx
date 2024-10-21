import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import Info from './components/Info/Info'
import Hero from './components/Sections/Hero'
import Work from './components/Sections/Work'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar />
      <Hero />
      <Info/>
      <Work/>
  </StrictMode>,
)

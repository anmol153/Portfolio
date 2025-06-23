import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import StarsCanvas from './Components/StarBackground'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Encryption from './Components/Encryption'
import ProjectCard from './Components/Projectscard'
import Projects from './Components/Projects'
import LeetcodeCom from './Components/Leetcode'
import Contact_me from './Components/Contact_me'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='h-full w-full'>
        <div className='flex flex-col gap-20 h-[850px]'>
          <Hero/>
        </div>
        <Navbar/>
      </main>
    </>
  )
}

export default App

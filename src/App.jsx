import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';
import { NavbarSimple } from './NavbarSimple'
import {Routes, Route} from "react-router-dom"
import Structured_Speeches from "./Pages/Structured_Speeches";
import Floor_Speeches from "./Pages/Floor_Speeches"

import { MantineProvider } from '@mantine/core';


function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
    {/* this is jsx */}
      <h1 className="heading" >DebateDash</h1>
      <h2 className="heading" z >Procedural Timer for <br />Diverse Speaking Needs</h2>
      <NavbarSimple></NavbarSimple>
      <Routes>
        <Route path="/" element = {<Structured_Speeches />} />
        <Route path="/floor" element={<Floor_Speeches />} />
      </Routes>

    </MantineProvider>

    
  )
}

export default App

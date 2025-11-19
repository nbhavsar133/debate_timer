import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';
import { NavbarSimple } from './NavbarSimple';

import { MantineProvider } from '@mantine/core';


function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
    {/* this is jsx */}
      <h1 class="heading" >DebateDash</h1>
      <h2 class="heading" z >Procedural Timer for <br />Diverse Speaking Needs</h2>
      <NavbarSimple></NavbarSimple>
    </MantineProvider>
  )
}

export default App

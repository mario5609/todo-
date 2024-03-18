import { useState } from 'react'
import './App.css'
import Checklist from './views/Home/Checklist'
import ContextProvider from './Context/Context'
import Home from './views/Home/Home'


function App() {


  return (
    <>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </>
  )
}

export default App

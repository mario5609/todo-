import React from 'react'
import CreateChecklist from './CreateChecklist'
import Checklist from './Checklist'
import ContextProvider from '../../Context/Context'
import './home.css'

export default function () {
  return (
    <div>
      <ContextProvider>
        <CreateChecklist />
        <Checklist />
      </ContextProvider>
    </div>
  )
}

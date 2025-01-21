import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClsComponent from './classCompoenet'
import Component from './functionalComponent' 
import Gallary from './Gallary'
import State from './State'

function App() {
  return(
    <><Component />
    <ClsComponent />
    <Gallary prop="hi"/>
    <State />
    </>
    
  )
}

export default App

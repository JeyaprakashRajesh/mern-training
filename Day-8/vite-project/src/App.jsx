import { useState } from 'react'
import './App.css'
import About from './Components/About'
import AuthScreen from './Components/AuthScreen'
import Contact from './Components/Contact'
import Gallary from './Components/Gallary'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import UseState from './Components/Hooks/UseState'
import UseEffect from './Components/Hooks/UseEffect'
import UseEffectAPI from './Components/Hooks/UseEffectApi'


function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/auth' && <Navbar />}
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/gallery' Component={Gallary} />
        <Route path='/contact' Component={Contact} />
        <Route path='/auth' Component={AuthScreen} />
        <Route path='/usestate' Component={UseState} />
        <Route path='/useeffect' Component={UseEffect} />
        <Route path='/useeffectapi' Component={UseEffectAPI} />
      </Routes>
    </>
  );
}

export default App;

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
import UseEffectAPIimage from './Components/Hooks/UseEffectApiImage'
import UseReducer from './Components/Hooks/UseReducer'
import UseMemo from './Components/Hooks/UseMemo'
import UseRef from './Components/Hooks/UseRef'
import UseCallback from './Components/Hooks/useCallback'
import ReactLifecycleMethods from './Components/ReactLifeCycleMethods';
import UseContext from './Components/Hooks/USeContext'
import Memo from './Components/Memoization/Memo'
import Storage from "./Components/Hooks/Custom_Hook/Sample"
import Usecust from "./Components/Hooks/Custom_Hook/UseLocalStorage"
import HoC from './Components/Hoc/HoC'
import DarkModeToggle from './Components/Hooks/Custom_Hook/DarkModeToggle'

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
        <Route path="/useeffectapiimage" Component={UseEffectAPIimage} />
        <Route path='/usereducer' Component={UseReducer} />
        <Route path='/usememo' Component={UseMemo} />
        <Route path='/useref' Component={UseRef} />
        <Route path='/usecallback' Component={UseCallback} />
        <Route path='/reactlifecycle' element={<ReactLifecycleMethods />} />
        <Route path='/usecontext' Component={UseContext} />
        <Route path='/memo' Component={Memo} />
        <Route path="/storage" Component={Storage} />
        <Route path='/usecust' Component={Usecust} />
        <Route path="/hoc" Component={HoC} />
        <Route path='/darkmode' Component={DarkModeToggle} />

      </Routes>
    </>
  );
}

export default App;

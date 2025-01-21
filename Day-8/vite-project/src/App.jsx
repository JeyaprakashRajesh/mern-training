
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Gallary from './Components/Gallary'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Route , Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <Navbar />
    <Routes
      
    >
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/gallery' Component={Gallary} />
      <Route path='/contact' Component={Contact} />
    </Routes>
    </>
  )
}

export default App

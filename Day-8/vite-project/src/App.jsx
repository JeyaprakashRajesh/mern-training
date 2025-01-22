import './App.css'
import About from './Components/About'
import AuthScreen from './Components/AuthScreen'
import Contact from './Components/Contact'
import Gallary from './Components/Gallary'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Navbar */}
      {location.pathname !== '/auth' && <Navbar />}
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/gallery' Component={Gallary} />
        <Route path='/contact' Component={Contact} />
        <Route path='/auth' Component={AuthScreen} />
      </Routes>
    </>
  );
}

export default App;

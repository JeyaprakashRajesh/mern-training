import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isDropDown, setDropDown] = useState(false);
  const [isHooksDropDown, setHooksDropDown] = useState(false);
  const [isMemoDropDown , setMemoDropDown] = useState(false)
  
  return (
    <section>
      <section className="navbar-container">
        <Link to="/" className="navbar-element">
          Home
        </Link>
        <Link to="/about" className="navbar-element">
          About
        </Link>
        <Link to="/gallery" className="navbar-element">
          Gallery
        </Link>
        <Link
          to="/contact"
          className="navbar-element"
          onMouseLeave={() => setDropDown(false)}
          onMouseEnter={() => setDropDown(true)}
        >
          Contact
          {isDropDown ? (
            <div className="navbar-dropdown-container">
              <ul>
                <li>Email</li>
                <li>Phone</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          ) : null}
        </Link>
        <div className="navbar-element" onMouseLeave={() => setMemoDropDown(false)} onMouseEnter={() => setMemoDropDown(true)}>
          Memoization 
          {isMemoDropDown ? 
            <div className="navbar-dropdown-container">
              <ul>
                <li><Link to="/memo">Memo</Link></li>
              </ul>
            </div>  : null
        }
        </div>
        <div className="navbar-element" onMouseLeave={() => setHooksDropDown(false)} onMouseEnter={() => setHooksDropDown(true)}>
          Hooks
          {isHooksDropDown ? (
            <div className="navbar-dropdown-container">
              <ul>
                <li>
                  <Link to="/usestate">UseState</Link>
                </li>
                <li>
                  <Link to="/useeffect">UseEffect</Link>
                </li>
                <li>
                  <Link to="/useeffectapi">UseEffect Api</Link>
                </li>
                <li>
                  <Link to="/useeffectapiimage">UseEffect Api Image</Link>
                </li>
                <li>
                  <Link to="/usereducer">UseReducer</Link>
                </li>
                <li>
                  <Link to="/usememo">UseMemo</Link>
                </li>
                <li>
                  <Link to="/useref">UseRef</Link>
                </li>
                <li>
                  <Link to="/usecallback">UseCallback</Link>
                </li>
                <li><Link to="/reactlifecycle" className='link'>Reactlifecycle</Link></li>
                <li><Link to="/usecontext" className='link'>usecontext</Link></li>
                <li><Link to="/storage" className='link'>Storage</Link></li>
                <li><Link to="/usecust" className='link'>cust-hook</Link></li>
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </section>
  );
}

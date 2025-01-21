import { Link } from "react-router-dom"
import "../styles/navbar.css"
export default function Navbar() {
    return(
        <section className="navbar-container">
            <Link to="/" className="navbar-element">Home</Link>
            <Link to="/about" className="navbar-element">About</Link>
            <Link to="/gallery" className="navbar-element">Gallery</Link>
            <Link to="/contact" className="navbar-element">Contact</Link>
        </section>
    )
}
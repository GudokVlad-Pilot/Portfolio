import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo"><Link className="link" to="/">SinunShow</Link></span>
        </div>
    )
}

export default Navbar;
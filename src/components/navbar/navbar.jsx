import logo from '../../img/logo.png'
import './navbar.css'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt=""/>
            <h1>THE FUTURE OF SOUND</h1>
            <div className="cta">
                <button>Login</button>
                <button>Register</button>
            </div>
        </nav>
    );
}
 
export default Navbar;
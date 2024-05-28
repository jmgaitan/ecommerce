import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <header className="header__container">
            <div className="header-logo">
                <Link to="/" className="logo-name">
                    <img src="./images/logo-1.png" alt="logo" />
                    <h2>Juguetería Cósmica</h2>
                </Link>
            </div>
            <nav className="dropdownmenu">
                <ul>
                    <li><Link to="/" className="footer-link">Inicio</Link></li>
                    <li><Link to="/AboutUs" className="footer-link">Nosotros</Link></li>
                    <li><Link to="/Contacts" className="footer-link">Contacto</Link></li>
                    <li><Link to="/alta" className="footer-link">Alta de Producto</Link></li>
                </ul>
            </nav>
        </header>
  );
};

export default NavBar;
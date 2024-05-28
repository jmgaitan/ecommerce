import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>© Juan Manuel Gaitan</p>
      </div>
      <div className="icon-socialmedia">
        <a href="https://github.com/jmgaitan">
          <img
            src="./images/icons/github-mark-white.svg"
            alt="Perfil de GitHub"
          />
        </a>
        <a href="https://www.facebook.com/juanma.gaitan/">
          <img
            src="./images/icons/facebook-mark-white.svg"
            alt="Perfil de Facebook"
          />
        </a>
        <a href="https://www.linkedin.com/in/jmgaitan93/">
          <img
            src="./images/icons/linkedin-mark-white.svg"
            alt="Perfil de LinkedIn"
          />
        </a>
        <a href="https://twitter.com/GaitanJuanMa">
          <img src="./images/icons/x-mark-white.svg" alt="Perfil de Twitter" />
        </a>
        <a href="https://www.instagram.com/gaitanjuanma/">
          <img
            src="./images/icons/instagram-mark-white.svg"
            alt="Perfil de Instagram"
          />
        </a>
      </div>
      <span className="link__container">
        <Link to="/nosotros" className="footer-link">
          Nosotros
        </Link>
        <Link to="./Contacts" className="footer-link">
        
          Contacto
        </Link>
      </span>
    </footer>
  );
}

export default Footer;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Assuming Header.css contains your existing styles

// Import the image directly so the bundler can resolve the correct path
import headerImage from '../media/header.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    // State to control whether the mobile navigation menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Keep ONLY this single block for handleNavigation.
    const handleNavigation = (e, path) => {
        e.preventDefault(); // Prevents the href="#" from redirecting to root
        setIsMenuOpen(false); // Closes the mobile menu automatically
        navigate(path);       // Navigates to the requested route
    };

    return (
        <div className='header-text'>
            {/* Replace the hardcoded string with the imported variable */}
            <img src={headerImage} alt="Semana Acadêmica" style={{ width: '100%', height: 'auto' }} />
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex flex-column align-items-center">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div 
                        className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} 
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">
                            <li className="tab nav-item p-2">
                                {/* Notice the (e) added to both the arrow function and handleNavigation */}
                                <a className="navtext nav-link" href="#" onClick={(e) => handleNavigation(e, "/")}>Início</a>
                            </li>
                            <li className="tab nav-item p-2">
                                <a className="navtext nav-link" href="#" onClick={(e) => handleNavigation(e, "/inscrições")}>Inscreva-se</a>
                            </li>
                            <li
                                className="tab nav-item p-2 custom-dropdown" // Add a custom class for styling
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <a
                                    className="navtext nav-link" // Removed dropdown-toggle
                                    href="#"
                                    id="submetaDropdown"
                                    role="button"
                                    aria-expanded={dropdownOpen ? "true" : "false"}
                                    onClick={(e) => handleNavigation(e, "/submeta")} // Prevent default navigation
                                >
                                    Submeta<br/> seu trabalho
                                </a>
                            </li>

                            <li className="tab p-2 nav-item">
                                <a 
                                  className="navtext nav-link" 
                                  href="#" 
                                  onClick={(e) => handleNavigation(e, "/regimentos")}
                                >
                                  Regimentos
                                  <br/>e Documentos
                                </a>
                            </li>

                            <li className="tab p-2 nav-item">
                                <a 
                                  className="navtext nav-link" 
                                  href="#" 
                                  onClick={(e) => handleNavigation(e, "/minicursos")}
                                >
                                  Minicursos
                                </a>
                            </li>

                            <li className="tab p-2 nav-item">
                                <a className="navtext nav-link" href="#" onClick={(e) => handleNavigation(e, "/programacao")}>Programação</a>
                            </li>
                            <li className="tab p-2 nav-item">
                                <a className="navtext nav-link" href="#" onClick={(e) => handleNavigation(e, "/certificados")}>Certificados</a>
                            </li>
                            <li className="tab p-2 nav-item">
                                <a className="navtext nav-link" href="#" onClick={(e) => handleNavigation(e, "/faq")}>Perguntas<br></br> Frequentes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
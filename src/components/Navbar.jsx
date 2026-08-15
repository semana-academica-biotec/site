import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Assuming Header.css contains your existing styles

// Import the image directly so the bundler can resolve the correct path
import headerImage from '../media/header.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='header-text'>
            {/* Replace the hardcoded string with the imported variable */}
            <img src={headerImage} alt="Semana Acadêmica" style={{ width: '100%', height: 'auto' }} />
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex flex-column align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="tab nav-item p-2">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/")}>Início</a>
                            </li>
                            <li className="tab nav-item p-2">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/inscrições")}>Inscreva-se</a>
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
                                    onClick={() => navigate("/submeta")} // Prevent default navigation
                                >
                                    Submeta seu trabalho
                                </a>
                            </li>

                            <li className="tab p-2 nav-item">
                                <a 
                                  className="navtext nav-link" 
                                  href="#" 
                                  onClick={() => navigate("/minicursos")}
                                >
                                  Mini cursos
                                </a>
                            </li>

                            <li className="tab p-2 nav-item">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/programacao")}>Programação</a>
                            </li>
                            <li className="tab p-2 nav-item">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/certificados")}>Certificados</a>
                            </li>
                            <li className="tab p-2 nav-item">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/faq")}>Perguntas Frequentes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
import React from 'react';
import logo from '.././assets/logohorarios_1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = ({ active }) => (
  <header className="home-header">
    <div className="logo-area">
      <img src={logo} alt="Logo" className="logo-img" />
    </div>
    <nav className="home-nav">
      <Link to="/Home" className={active === 'HOME' ? 'active' : ''}>HOME</Link>
      <Link to="/Horario" className={active === 'HORARIOS' ? 'active' : ''}>HORARIOS</Link>
      <Link to="/Profesor" className={active === 'PROFESORES' ? 'active' : ''}>PROFESORES</Link>
      <Link to="/Materia" className={active === 'MATERIAS' ? 'active' : ''}>MATERIAS</Link>
      <Link to="/Usuario" className={active === 'USUARIOS' ? 'active' : ''}>USUARIOS</Link>
      <Link to="/Usuario" className={active === 'COLEGIOS' ? 'active' : ''}>COLEGIOS</Link>
    </nav>
    <div className="logout-area">
      <Link to="/" className="logout-link">
      <span>SALIR</span>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon" />
      </Link>
    </div>
  </header>
);

export default Navbar;
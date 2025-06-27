import React from 'react';
import logo from '.././assets/logohorarios_1.png';
import { Link } from 'react-router-dom';
//import './Navbar.css';

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
    </nav>
    <div className="logout-area">
      <Link to="/"><span>SALIR</span>
      <span className="logout-icon">⎋</span></Link>
    </div>
  </header>
);

export default Navbar;
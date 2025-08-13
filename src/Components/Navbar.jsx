import React from 'react';
import logo from '.././assets/logohorarios_1.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';


const Navbar = ({ active }) =>{
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const [isAuth, setIsAuth] = useState(true);
    //const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        // Verificar si el token existe en localStorage
        const token = localStorage.getItem('token');
        /*const rol = localStorage.getItem('rol');*/
        setIsAuthenticated(token); // Si el token existe, isAuthenticated será true
        //setIsAuthenticated(!!token); // Si el token existe, isAuthenticated será true
        //setIsAuth(!token);
        //setUserRole(rol);
    }, []);

    const handleLogout = () => {
        // Eliminar el token y otros datos relacionados con la sesión
        localStorage.removeItem('token');
        //localStorage.removeItem('usuario');
        //localStorage.removeItem('rol'); // Si estás almacenando el rol

        // Redirigir al login
        navigate('/');
    };
  
  return (
  <header className="home-header">
    <div className="logo-area">
      <img src={logo} alt="Logo" className="logo-img" />
    </div>
    <nav className="home-nav">
      <Link to="/Home" className={active === 'HOME' ? 'active' : ''}>HOME</Link>
      <Link to="/Profesor" className={active === 'PROFESORES' ? 'active' : ''}>PROFESORES</Link>
      <Link to="/Materia" className={active === 'MATERIAS' ? 'active' : ''}>MATERIAS</Link>
      <Link to="/Horario" className={active === 'HORARIOS' ? 'active' : ''}>HORARIOS</Link>
      {/* <Link to="/Usuario" className={active === 'USUARIOS' ? 'active' : ''}>USUARIOS</Link> */}
      <Link to="/Grupo" className={active === 'GRUPOS' ? 'active' : ''}>GRUPOS</Link>
    </nav>
    <div className="logout-area">
      {isAuthenticated && (
      <Link to="/" className="logout-link" onClick={handleLogout}>
      <span>SALIR</span>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon" />
      </Link>
      )}
    </div>
  </header>
);

} 

export default Navbar;
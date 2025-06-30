import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import '../styles/home.css';
import logo from '../assets/logohorarios_1.png';
import { useState, useEffect } from 'react';
import CrearColegio from '../Components/Modal/CrearColegio';


const HomeAdmin = () => {

  const [usuario, setUsuario] = useState('Usuario');
  const [mostrarCrearColegio, setMostrarCrearColegio] = useState(false);
  
  useEffect(() => {
    const nombreUsuario = localStorage.getItem('nombreUsuario') || 'Usuario';
    setUsuario(nombreUsuario);
  }, []);
  
  return (
    <div className="home-page">
      <Navbar active="HOME" />
      <main className="homeadmin-main">
  <h2 className="homeadmin-bienvenido">¡B I E N V E N I D O!</h2>
  <p className="homeadmin-nombre">{usuario}</p>
  <div className="homeadmin-btn-group">
    <button className="homeadmin-btn">Crear Usuario</button>
    <button className="homeadmin-btn">Crear Horario</button>
    <button
      className="homeadmin-btn"
      onClick={() => setMostrarCrearColegio(true)}
    >
      Crear Colegio
    </button>

    {mostrarCrearColegio && (
      <CrearColegio onClose={() => setMostrarCrearColegio(false)} />
    )}
  </div>
</main> 
<Footer />
    </div>
  );
};

export default HomeAdmin;

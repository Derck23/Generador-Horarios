import React from 'react';
//import logo from '../../assets/logo.svg';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar active="HOME" />
      {/*<header className="home-header">
        <div className="logo-area">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">Bit</span>
        </div>
        <nav className="home-nav">
          <a href="#" className="active">HOME</a>
          <a href="#">HORARIOS</a>
          <a href="#">PROFESORES</a>
          <a href="#">MATERIAS</a>
        </nav>
        <div className="logout-area">
          <span>SALIR</span>
          <span className="logout-icon">⎋</span>
        </div>
      </header>*/}
      <main className="home-main">
        <h2 className="bienvenido">¡B I E N V E N I D O!</h2>
        <p className="nombre">Alicia Pérez Rebolledo</p>
        <button className="crear-horario-btn">Crear horario</button>
      </main>
      {/*<footer className="home-footer">
        <div className="footer-icons">
          <span>ⓕ</span>
          <span>ⓘ</span>
          <span>ⓧ</span>
        </div>
        <div className="footer-copy">2025 Copyright Bit</div>
      </footer>*/}
      <Footer />
    </div>
  );
};

export default Home;

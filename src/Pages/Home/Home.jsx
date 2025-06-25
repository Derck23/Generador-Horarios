import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <form className="login-form">
              <img src={logo} alt="Logo" className="logo" />
              <div className="button-row">
                <Link to="/login">
                  <button type="button">Iniciar sesion</button>
                </Link>
                <Link to="/register">
                  <button type="button">Registrarse</button>
                </Link>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

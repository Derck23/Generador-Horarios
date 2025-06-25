import React from 'react';
import './Login.css';
import logo from '../../assets/logohorarios_1.png';
import agenda from '../../assets/agenda.png';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
        <div className="login-logo-wrapper">
          <img src={logo} alt="Logo" className="login-logo" />
        </div>
        <div className="login-content">
          <form className="login-form">
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit">ENTRAR</button>
          </form>
          <p className="register-text">
            ¿No tienes cuenta? <a href="#">Registrarme</a>
          </p>
        </div>
        </div>
        <div className="login-right">
          <img src={agenda} alt="Ilustración" className="login-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;

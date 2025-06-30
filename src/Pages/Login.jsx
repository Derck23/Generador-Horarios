import React from 'react';
import '../styles/global.css';
import '../styles/login.css';
import logo from '../assets/logohorarios_1.png';
import agenda from '../assets/calendar.png';
import { Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
        <div className="login-logo-wrapper">
          <img src={logo} alt="Logo" className="login-logo" />
        </div>
        <div className="login-form-wrapper">
          <form className="login-form">
            <input type="email" placeholder="Correo: " />
            <input type="password" placeholder="Contraseña: " />
            <Link to="/Home"><button type="submit" >ENTRAR</button></Link>
          </form>
          </div>
          <div className="login-content">
          <p className="register-text">
            ¿No tienes cuenta? <Link to="/registrar-usuario">Registrarme</Link>
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

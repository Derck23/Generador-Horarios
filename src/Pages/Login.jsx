import React from 'react';
import './styles/global.css';
import './styles/login.css';
import logo from './assets/logohorarios_1.png';
import agenda from './assets/calendar.png';
import { useState } from 'react';
import './Login.css';
//import logohorarios_1 from '../assets/logohorarios_1.png';
import { Link} from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {

  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Intentando iniciar sesión con:', form);
      const data = await login({ username: form.username, password: form.password });
      
      localStorage.setItem('token', data.token); // guardar token
      // redirigir a dashboard o home
      window.location.href = '/home';
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    }
  };

  return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-left">
          <div className="login-logo-wrapper">
            <img src={logo} alt="Logo" className="login-logo" />
          </div>
          <div className="login-content">
            <form className="login-form" onSubmit={handleSubmit}>
              <input type="username" name='username' placeholder="username" value={form.username} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Contraseña:" value={form.password} onChange={handleChange} required />
              {/*<Link to="/Home"></Link>*/}<button type="submit" >ENTRAR</button>
              {error && <p className="error">{error}</p>}
            </form>
            <p className="register-text">
              ¿No tienes cuenta? <a href="/Registro">Registrarme</a>
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
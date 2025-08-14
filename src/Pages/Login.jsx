import React, { useState } from 'react';
import '../styles/global.css';
import '../styles/login.css';
import logo from '../assets/logohorarios_1.png';
import agenda from '../assets/calendar.png';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Intentando iniciar sesión con usuario:', form.username);
      const data = await login({ username: form.username, password: form.password });
      
      localStorage.setItem('token', data.data.token); // guardar token
      localStorage.setItem('user', JSON.stringify(data.data.user));
      // redirigir a dashboard o home
      navigate('/Home');
    } catch (err) {
      console.error('Error de login:', err);
      setError(err.message || 'Error al iniciar sesión. Verifica tu conexión.');
    }
  };

  return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-left">
          <div className="login-logo-wrapper">
            <img src={logo} alt="Logo" className="login-logo" />
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={form.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Iniciar Sesión</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        </div>
        <div className="login-right">
          <img src={agenda} alt="Ilustración" className="login-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
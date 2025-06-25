import React, { useState } from 'react';
import { login } from '../../services/authService';
import './LoginForm.css';
import logo from '../../assets/logo.svg';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await login({ email: form.email, password: form.password });
      localStorage.setItem('token', data.token); // guardar token
      // redirigir a dashboard o home
      window.location.href = '/home';
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    }
  };

  return (
  <form className="login-form" onSubmit={handleSubmit}>
    <img src={logo} alt="Logo" className="logo" />
    <input
      type="email"
      name="email"
      placeholder="Correo:"
      value={form.email}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Contraseña:"
      value={form.password}
      onChange={handleChange}
      required
    />
    <button type="submit">ENTRAR</button>
    {error && <p className="error">{error}</p>}
    <p className="register-link">
      ¿No tienes cuenta? <a href="/register">Registrarme</a>
    </p>
  </form>
);
};

export default LoginForm;

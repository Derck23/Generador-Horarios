import React, { useState } from 'react';
import './Registro.css';
import logo from '../../assets/logohorarios_1.png';
import agenda from '../../assets/agenda.png';
import { Link} from 'react-router-dom';
import { register } from '../../services/authService';

const Registro = () => {
  const [form, setForm] = useState({ email: '', phone: '', dob: '', username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Intentando registrar usuario con:', form);
      const data = await register({ username: form.username, password: form.password });
      console.log('Registro exitoso:', data);
      // redirigir a dashboard o home
      window.location.href = '/';
    } catch (err) {
      setError(err.message || 'Error al registrar usuario');
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
            <input type="email" name='email' placeholder="Email" value={form.email} onChange={handleChange} required />
            <input type="text" name='phone' placeholder="Teléfono" value={form.phone} onChange={handleChange} required />
            <input type="date" name='dob' placeholder="Fecha de Nacimiento" value={form.dob} onChange={handleChange} required />
            <input type="text" name='username' placeholder="username" value={form.username} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Contraseña:" value={form.password} onChange={handleChange} required />
            <button type="submit" >REGISTRAR</button>
            {error && <p className="error">{error}</p>}
          </form>
          <p className="register-text">
            ¿Ya tienes cuenta? <Link to="/">Iniciar Sesión</Link>
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

export default Registro;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/modal.css'; 

const RegistrarUsuario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
    colegio: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Usuario registrado:", formData);
    navigate('/Home');
  };

  const handleCancel = () => {
    console.log('cancelar');
    window.location.href = '/';
};

  return (
    <div className="crearcolegio-container">
      <div className="crearcolegio-card">
        <h2 className="crearcolegio-title">Agregar usuario</h2>
        <form className="crearcolegio-form" onSubmit={handleSubmit}>
          <label className="crearcolegio-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ej. Paola Salazar"
            value={formData.nombre}
            onChange={handleChange}
            className="crearcolegio-input"
            required
          />

          <label className="crearcolegio-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="correo@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            className="crearcolegio-input"
            required
          />

          <label className="crearcolegio-label">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Mínimo 6 caracteres"
            value={formData.password}
            onChange={handleChange}
            className="crearcolegio-input"
            required
          />

          <label className="crearcolegio-label">Confirmar contraseña</label>
          <input
            type="password"
            name="confirmar"
            placeholder="Repetir contraseña"
            value={formData.confirmar}
            onChange={handleChange}
            className="crearcolegio-input"
            required
          />

          <label className="crearcolegio-label">Nombre del colegio</label>
          <select
            name="colegio"
            value={formData.colegio}
            onChange={handleChange}
            className="crearcolegio-input"
            required
          >
            <option value="">Seleccionar...</option>
            <option value="Colegio A">Colegio A</option>
            <option value="Colegio B">Colegio B</option>
          </select>

          <button type="submit" className="crearcolegio-btn">
            Guardar y continuar
          </button>
          <button type="button" className="crearcolegio-btn" onClick={handleCancel}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrarUsuario;

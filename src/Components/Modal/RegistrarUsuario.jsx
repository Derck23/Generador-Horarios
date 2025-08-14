import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/modal.css';
import { register } from '../../services/authService';

const RegistrarUsuario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidom: '',
    apellidop: '',
    email: '',
    password: '',
    confirmar: '',
    dob: '',
    username : '',
    phone : ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Usuario registrado:", formData);
    try {
      console.log('Intentando registrar usuario con:', formData);
      const data = await register(formData);
      console.log('Usuario registrado exitosamente:', data);

      navigate('/');
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  const handleCancel = () => {
    console.log('cancelar');
    window.location.href = '/home';
};

  return (
    <div className="modal-overlay">
    <div className="crearcolegio-container">
      <div className="crearcolegio-card">
        <h2 className="crearcolegio-title">Agregar usuario</h2>
        <form className="crearcolegio-form" onSubmit={handleSubmit}>
          <label className="crearcolegio-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ej. Paola"
            value={formData.nombre}
            onChange={handleChange}
            className="crearcolegio-input"
            required
          />
          <div className="crearcolegio-row">
            <div style={{ flex: 1, marginRight: '10px' }}>
              <label className="crearcolegio-label">Apellido Materno</label>
              <input
                type="text"
                name="apellidom"
                placeholder="Ej. Salazar"
                value={formData.apellidom}
                onChange={handleChange}
                className="crearcolegio-input"
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className="crearcolegio-label">Apellido Paterno</label>
              <input
                type="text"
                name="apellidop"
                placeholder="Ej. López"
                value={formData.apellidop}
                onChange={handleChange}
                className="crearcolegio-input"
                required
              />
            </div>
          </div>
          
          <label className="crearcolegio-label">Fecha de nacimiento</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="crearcolegio-input"
            required
          />
          <label className="crearcolegio-label">Teléfono</label>
          <input
            type="tel"
            name="phone"
            placeholder="Ej. 1234567890"
            value={formData.phone}
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
          <label className="crearcolegio-label">Usuario</label>
          <input
            type="text"
            name="username"
            placeholder="Ej. paola123"
            value={formData.username}
            onChange={handleChange}
            className="crearcolegio-input"
            required
          />

          {/* Agrupar contraseñas */}
          <div className="crearcolegio-row">
            <div style={{ flex: 1, marginRight: '10px' }}>
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
            </div>
            <div style={{ flex: 1 }}>
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
            </div>
          </div>

          {/*<label className="crearcolegio-label">Nombre del colegio</label>
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
          </select>*/}

          {/*<label className="crearcolegio-label">Rol</label>
          <select
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            className="crearcolegio-input"
            required
          >
            <option value="">Seleccionar...</option>
            <option value="Administrador">Administrador</option>
            <option value="Profesor">Profesor</option>
          </select>*/}

          <button type="submit" className="crearcolegio-btn">
            Guardar y continuar
          </button>
          <button type="button" className="crearcolegio-btn" onClick={handleCancel}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegistrarUsuario;

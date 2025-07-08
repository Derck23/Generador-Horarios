import React, { useState } from 'react';
import '../../styles/modal.css';
import { useNavigate } from 'react-router-dom';
import { registrarProfesor } from '../../services/profesorService';

const RegistrarProfesor = () => {
  const [formData, setFormData] = useState({
    apellidoPaterno: '',
    apellidoMaterno: '',
    nombre: '',
    horasRestringidas: '',
    horasTrabajo: '',
    grupos: '',
    materiasAsignadas: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registrarProfesor({
        ...formData,
        grupos: formData.grupos.split(',').map(g => g.trim()),
        materiasAsignadas: formData.materiasAsignadas.split(',').map(m => m.trim())
      });
      navigate('/Profesor');
    } catch (error) {
      console.error('Error al registrar profesor:', error);
    }
  };

  const handleCancel = () => {
    window.location.href = '/Profesor';
  };

  return (
    <div className="crearcolegio-container">
      <div className="crearcolegio-card">
        <h2 className="crearcolegio-title">Registrar Profesor</h2>
        <form className="crearcolegio-form" onSubmit={handleSubmit}>
          <label className="crearcolegio-label">Apellido Paterno</label>
          <input
            type="text"
            value={formData.apellidoPaterno}
            onChange={e => setFormData({ ...formData, apellidoPaterno: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label className="crearcolegio-label">Apellido Materno</label>
          <input
            type="text"
            value={formData.apellidoMaterno}
            onChange={e => setFormData({ ...formData, apellidoMaterno: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label className="crearcolegio-label">Nombre(s)</label>
          <input
            type="text"
            value={formData.nombre}
            onChange={e => setFormData({ ...formData, nombre: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label className="crearcolegio-label">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label className="crearcolegio-label">Horas Restringidas</label>
          <input
            type="text"
            value={formData.horasRestringidas}
            placeholder="Ej. Lunes 8-10, Martes 12-14"
            onChange={e => setFormData({ ...formData, horasRestringidas: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label className="crearcolegio-label">Horas de Trabajo</label>
          <input
            type="number"
            value={formData.horasTrabajo}
            onChange={e => setFormData({ ...formData, horasTrabajo: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label className="crearcolegio-label">Grupos (separados por coma)</label>
          <input
            type="text"
            value={formData.grupos}
            placeholder="Ej. 1A, 2B"
            onChange={e => setFormData({ ...formData, grupos: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label className="crearcolegio-label">Materias Asignadas (separadas por coma)</label>
          <input
            type="text"
            value={formData.materiasAsignadas}
            placeholder="Ej. Matemáticas, Física"
            onChange={e => setFormData({ ...formData, materiasAsignadas: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <button type="submit" className="crearcolegio-btn">
            Guardar
          </button>
          <button type="button" className="crearcolegio-btn" onClick={handleCancel}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrarProfesor;
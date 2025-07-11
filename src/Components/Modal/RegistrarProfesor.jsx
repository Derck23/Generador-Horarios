import React, { useState } from 'react';
import '../../styles/modal.css';
import { useNavigate } from 'react-router-dom';
import { registrarProfesor } from '../../services/profesorService';

const RegistrarProfesor = () => {
  const [formData, setFormData] = useState({
    apellidoPaterno: '',
    apellidoMaterno: '',
    nombre: '',
    email: '',
    matricula: '',
    horasRestringidas: '',
    horasTrabajo: '',
    materiasAsignadas: []
  });

  const materiasDisponibles = [
    'Matemáticas',
    'Física',
    'Química',
    'Biología',
    'Historia',
    'Literatura',
    'Inglés',
    'Programación'
  ];

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registrarProfesor({
        ...formData,
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

  const handleMateriasChange = (e) => {
    const options = e.target.options;
    const selectedMaterias = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedMaterias.push(options[i].value);
      }
    }
    setFormData({ ...formData, materiasAsignadas: selectedMaterias });
  };

  return (
    <div className="modal-overlay">
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
          <label className="crearcolegio-label">Matricula</label>
          <input
            type="text"
            value={formData.matricula}
            onChange={e => setFormData({ ...formData, matricula: e.target.value })}
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
          <label className="crearcolegio-label">Materias Asignadas</label>
          <div className="crearcolegio-checkbox-list">
          {materiasDisponibles.map((materia, index) => (
          <label key={index} className="crearcolegio-checkbox-item">
          <span>{materia}</span>
          <input
            type="checkbox"
            value={materia}
            checked={formData.materiasAsignadas.includes(materia)}
            onChange={(e) => {
            const { checked, value } = e.target;
            setFormData((prev) => {
              const materias = checked
              ? [...prev.materiasAsignadas, value]
              : prev.materiasAsignadas.filter((m) => m !== value);
              return { ...prev, materiasAsignadas: materias };
              });
            }}
          />
          </label>
          ))}
          </div>
          <button type="submit" className="crearcolegio-btn">
            Guardar
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

export default RegistrarProfesor;

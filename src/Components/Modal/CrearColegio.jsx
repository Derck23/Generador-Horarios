import React, { useState } from 'react';
import '../../styles/modal.css'; 
import { useNavigate } from 'react-router-dom';
import { crearColegio } from '../../services/colegioService';

const CrearColegio = () => {
  const [formData, setFormData] = useState({
    claveColegio: '',
    nombreColegio: '',
    direccion: '',
    telefono: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    console.log('Intentando crear colegio con:', formData);
    e.preventDefault();
    try {
      await crearColegio(formData);
      console.log('Colegio creado:', formData);
      navigate('/Colegio');
    } catch (error) {
      console.error('Error al crear colegio:', error);
    }
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    console.log('cancelar');
    window.location.href = '/Home';
};

  return (
    <div className="modal-overlay">
    <div className="crearcolegio-container">
      <div className="crearcolegio-card">
        <h2 className="crearcolegio-title">Agregar colegio</h2>
        <form className="crearcolegio-form" onSubmit={handleSubmit}>
          <label htmlFor="nombreColegio" className="crearcolegio-label">
            Clave del colegio
          </label>
          <input
            id="claveColegio"
            type="text"
            value={formData.claveColegio}
            placeholder="Ej. Colegio Juárez"
            onChange={(e) => setFormData({ ...formData, claveColegio: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label htmlFor="nombreColegio" className="crearcolegio-label">
            Nombre del colegio
          </label>
          <input
            id="nombreColegio"
            type="text"
            value={formData.nombreColegio}
            placeholder="Ej. Colegio Juárez"
            onChange={(e) => setFormData({ ...formData, nombreColegio: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label htmlFor="direccion" className="crearcolegio-label">
            Dirección
          </label>
          <input
            id="direccion"
            type="text"
            value={formData.direccion}
            placeholder="Ej. Calle 123, Ciudad"
            onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label htmlFor="plantel" className="crearcolegio-label">
            Plantel
          </label>
          <input
            id="plantel"
            type="text"
            value={formData.plantel}
            placeholder="Plantel"
            onChange={(e) => setFormData({ ...formData, plantel: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label htmlFor="nivel" className="crearcolegio-label">
            Nivel
          </label>
          <input
            id="nivel"
            type="text"
            value={formData.nivel}
            placeholder="Ej. Secundaria"
            onChange={(e) => setFormData({ ...formData, nivel: e.target.value })}
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
    </div>
  );
};

export default CrearColegio;

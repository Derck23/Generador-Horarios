import React, { useState } from 'react';
import '../../styles/modal.css'; 
import { registrarMateria } from '../../services/colegioService';

const RegistrarMateria = ({ onClose, onMateriaAgregada }) => {
  const [nombreMateria, setNombreMateria] = useState('');
  const [horas, setHoras] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registrarMateria({ nombreMateria, horas });
      if (onMateriaAgregada) onMateriaAgregada();
    } catch (error) {
      console.error('Error al registrar materia:', error);
      alert('Error al registrar materia');
    }
    setLoading(false);
  };

  return (
    <div className="crearcolegio-container">
      <div className="crearcolegio-card" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <h2 className="crearcolegio-title">Agregar materia</h2>
        <form className="crearcolegio-form" onSubmit={handleSubmit}>
          <div style={{ width: '100%' }}>
            <label className="crearcolegio-label">Nombre de la materia</label>
            <input
              type="text"
              placeholder="Nombre"
              className="crearcolegio-input"
              value={nombreMateria}
              onChange={e => setNombreMateria(e.target.value)}
              required
            />
          </div>
           <div style={{ width: '100%' }}>
            <label className="crearcolegio-label">Horas semanales</label>
            <input
              type="number"
              placeholder="Horas"
              className="crearcolegio-input"
              value={horas}
              onChange={e => setHoras(e.target.value)}
              required
            />
           </div>
          <div>
            <button type="submit" className="crearcolegio-btn" disabled={loading}>
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
            <button type="button" className="crearcolegio-btn" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrarMateria;

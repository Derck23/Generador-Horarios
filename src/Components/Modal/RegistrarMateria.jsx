import React, { useState } from 'react';
import '../../styles/modal.css'; 
import { registrarMateria } from '../../services/colegioService';

const niveles = [
  { value: '', label: 'Selecciona un nivel' },
  { value: 'Primaria', label: 'Primaria' },
  { value: 'Secundaria', label: 'Secundaria' },
  { value: 'Preparatoria', label: 'Preparatoria' }
];

const gradosPorNivel = {
  Primaria: ['1ro', '2do', '3ro', '4to', '5to', '6to'],
  Secundaria: ['1ro', '2do', '3ro'],
  Preparatoria: ['1 semestre', '2 semestre', '3 semestre', '4 semestre', '5 semestre', '6 semestre']
};

const RegistrarMateria = ({ onClose, onMateriaAgregada }) => {
  const [nombreMateria, setNombreMateria] = useState('');
  const [horas, setHoras] = useState('');
  const [nivel, setNivel] = useState('');
  const [grado, setGrado] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    if (onClose) onClose();
  };

  const handleNivelChange = (e) => {
    setNivel(e.target.value);
    setGrado('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registrarMateria({ nombreMateria, horas, nivel, grado });
      
      // Llamar a la función para actualizar la vista
      if (onMateriaAgregada) {
        onMateriaAgregada();
      }
      
      // Cerrar la modal
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error('Error al registrar materia:', error);
      alert('Error al registrar materia');
    }
    setLoading(false);
  };

  return (
    <div className="modal-overlay">
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
            <div style={{ width: '100%' }}>
              <label className="crearcolegio-label">Nivel</label>
              <select
                value={nivel}
                onChange={handleNivelChange}
                className="crearcolegio-input"
                required
              >
                {niveles.map(n => (
                  <option key={n.value} value={n.value}>{n.label}</option>
                ))}
              </select>
            </div>
            {nivel && (
              <div style={{ width: '100%' }}>
                <label className="crearcolegio-label">Grado</label>
                <select
                  value={grado}
                  onChange={e => setGrado(e.target.value)}
                  className="crearcolegio-input"
                  required
                >
                  <option value="">Selecciona un grado</option>
                  {gradosPorNivel[nivel].map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            )}
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
    </div>
  );
};

export default RegistrarMateria;

import React, { useState } from 'react';
import '../../styles/modal.css'; 
import { registrarGrupo } from '../../services/colegioService';

const niveles = [
  { value: '', label: 'Selecciona un nivel' },
  { value: 'Primaria', label: 'Primaria' },
  { value: 'Secundaria', label: 'Secundaria' },
  { value: 'Prepa', label: 'Prepa' }
];

const gradosPorNivel = {
  Primaria: ['1ro', '2do', '3ro', '4to', '5to', '6to'],
  Secundaria: ['1ro', '2do', '3ro'],
  Prepa: ['1ro', '2do', '3ro', '4to', '5to', '6to']
};

const RegistrarGrupo = ({ onClose, onGrupoAgregado }) => {
  const [formData, setFormData] = useState({
    nombreGrupo: '',
    nivel: '',
    grado: '',
    idColegio: ''
  });
  const [loading, setLoading] = useState(false);

  const handleNivelChange = (e) => {
    setFormData({
      ...formData,
      nivel: e.target.value,
      grado: '' // Limpiar grado al cambiar nivel
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registrarGrupo(formData);
      if (onGrupoAgregado) onGrupoAgregado();
    } catch (error) {
      alert('Error al registrar grupo');
      console.error('Error al registrar grupo:', error);
    }
    setLoading(false);
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  return (
    <div className="modal-overlay">
    <div className="crearcolegio-container">
      <div className="crearcolegio-card">
        <h2 className="crearcolegio-title">Agregar grupo</h2>
        <form className="crearcolegio-form" onSubmit={handleSubmit}>
          <label className="crearcolegio-label">Nombre del grupo</label>
          <input
            type="text"
            value={formData.nombreGrupo}
            onChange={e => setFormData({ ...formData, nombreGrupo: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <label className="crearcolegio-label">Nivel</label>
          <select
            value={formData.nivel}
            onChange={handleNivelChange}
            className="crearcolegio-input"
            required
          >
            {niveles.map(nivel => (
              <option key={nivel.value} value={nivel.value}>{nivel.label}</option>
            ))}
          </select>
          {formData.nivel && (
            <>
              <label className="crearcolegio-label">Grado</label>
              <select
                value={formData.grado}
                onChange={e => setFormData({ ...formData, grado: e.target.value })}
                className="crearcolegio-input"
                required
              >
                <option value="">Selecciona un grado</option>
                {gradosPorNivel[formData.nivel].map(grado => (
                  <option key={grado} value={grado}>{grado}</option>
                ))}
              </select>
            </>
          )}
          <label className="crearcolegio-label">ID Colegio</label>
          <input
            type="text"
            value={formData.idColegio}
            onChange={e => setFormData({ ...formData, idColegio: e.target.value })}
            className="crearcolegio-input"
            required
          />
          <button type="submit" className="crearcolegio-btn" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar'}
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

export default RegistrarGrupo;

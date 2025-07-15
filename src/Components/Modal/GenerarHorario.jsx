import React, { useEffect, useState } from 'react';
import '../../styles/modal.css';
import { gruposPorColegio } from '../../services/colegioService';

const GenerarHorario = ({ onClose, onHorarioCreado }) => {
  const [grupos, setGrupos] = useState([]);
  const [grupoSeleccionado, setGrupoSeleccionado] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const data = await gruposPorColegio();
        setGrupos(data);
      } catch (error) {
        console.error("Error al obtener grupos:", error);
        setGrupos([]);
      }
    };
    fetchGrupos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (onHorarioCreado) onHorarioCreado();
    setLoading(false);
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="crearcolegio-container">
        <div className="crearcolegio-card">
          <h2 className="crearcolegio-title">Generar horario para grupo</h2>
          <form className="crearcolegio-form" onSubmit={handleSubmit}>
            <label className="crearcolegio-label">Selecciona un grupo</label>
            <select
              value={grupoSeleccionado}
              onChange={e => setGrupoSeleccionado(e.target.value)}
              className="crearcolegio-input"
              required
            >
              <option value="">Selecciona un grupo</option>
              {grupos.map(grupo => (
                <option key={grupo.id} value={grupo.id}>
                  {grupo.nombreGrupo} ({grupo.nivel} - {grupo.grado})
                </option>
              ))}
            </select>
            {/* Aquí puedes agregar más campos para definir el horario */}
            <button type="submit" className="crearcolegio-btn" disabled={loading || !grupoSeleccionado}>
              {loading ? 'Generando...' : 'Generar horario'}
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

export default GenerarHorario;
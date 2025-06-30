import React, { useState } from 'react';
import '../../styles/modal.css'; 
import { useNavigate } from 'react-router-dom';

const CrearColegio = () => {
  const [nombreColegio, setNombreColegio] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Colegio guardado:', nombreColegio);
  };
  const handleCancel = () => {
    console.log('cancelar');
    window.location.href = '/Home';
};

  return (
    <div className="crearcolegio-container">
      <div className="crearcolegio-card">
        <h2 className="crearcolegio-title">Agregar colegio</h2>
        <form className="crearcolegio-form" onSubmit={handleSubmit}>
          <label htmlFor="nombreColegio" className="crearcolegio-label">
            Nombre del colegio
          </label>
          <input
            id="nombreColegio"
            type="text"
            value={nombreColegio}
            placeholder="Ej. Colegio Juárez"
            onChange={(e) => setNombreColegio(e.target.value)}
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

export default CrearColegio;

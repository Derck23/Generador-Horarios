import React, { useState } from 'react';
import '../../styles/modal.css'; 
import { useNavigate } from 'react-router-dom';

const RegistrarMateria = () => {

const handleCancel = () => {
    console.log('cancelar');
    window.location.href = '/Materia';
};

  return (
    <div className="crearcolegio-container">
      <div className="crearcolegio-card" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <h2 className="crearcolegio-title">Agregar materia</h2>
        <form className="crearcolegio-form">

          <div style={{ width: '100%' }}>
            <label className="crearcolegio-label">Nombre de la materia</label>
            <input
              type="text"
              placeholder="Nombre"
              className="crearcolegio-input"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%' }}>
            <div>
              <label className="crearcolegio-label">Clave de materia</label>
              <input type="text" placeholder="Clave" className="crearcolegio-input" />
            </div>
            <div>
              <label className="crearcolegio-label">Grupos a impartir</label>
              <select className="crearcolegio-input">
                <option value="">Seleccionar...</option>
              </select>
            </div>
            <div>
              <label className="crearcolegio-label">Nivel educativo</label>
              <select className="crearcolegio-input">
                <option value="">Seleccionar...</option>
              </select>
            </div>

            <div>
              <label className="crearcolegio-label">Horas semanales</label>
              <input type="number" placeholder="Horas" className="crearcolegio-input" />
            </div>
            <div>
              <label className="crearcolegio-label">Responsable</label>
              <input type="text" placeholder="Responsable" className="crearcolegio-input" />
            </div>

            <div style={{ width: '100%' }}>
              <label className="crearcolegio-label">Grado</label>
              <select className="crearcolegio-input">
                <option value="">Seleccionar...</option>
              </select>
            </div>
            <div></div>
          </div>

          <div style={{ width: '100%' }}>
            <label className="crearcolegio-label">Descripción</label>
            <textarea placeholder="Escribe un comentario..." className="crearcolegio-input" rows={3} />
          </div>

          <div>
          <button type="submit" className="crearcolegio-btn">
            Guardar
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

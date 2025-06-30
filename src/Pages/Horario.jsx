import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/home.css';

const horarios = [
  { id: 1, grupo: '3 A', fecha: '02/05/2025', turno: 'Matutino' },
  { id: 2, grupo: '1 B', fecha: '02/05/2025', turno: 'Vespertino' },
  { id: 3, grupo: '2 A', fecha: '30/04/2025', turno: 'Matutino' },
  { id: 4, grupo: '1 A', fecha: '29/04/2025', turno: 'Vespertino' },
  { id: 5, grupo: '3 B', fecha: '29/04/2025', turno: 'Vespertino' },
  { id: 6, grupo: '2 B', fecha: '01/03/2025', turno: 'Matutino' },
  { id: 7, grupo: '1 C', fecha: '01/03/2025', turno: 'Matutino' },
];

const Horario = () => (
  <div className="home-page">
    <Navbar active="HORARIOS" />
    <main className="home-main" style={{ alignItems: 'flex-start', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ margin: '32px 0 16px 0' }}>
          <div style={{ fontSize: '1.3rem', color: '#46687c', fontWeight: 500 }}>
            Colegio Nuevo Continente
          </div>
          <div style={{ color: '#6b8ca2', fontSize: '1rem' }}>
            Plantel Querétaro<br />
            Nivel: Secundaria
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Buscar..."
            style={{
              borderRadius: 12,
              border: 'none',
              padding: '6px 16px',
              outline: 'none',
              fontSize: 14,
              background: '#e3f0fa',
              color: '#46687c',
              marginRight: 8,
            }}
          />
          <span style={{ fontSize: 18, color: '#6b8ca2', alignSelf: 'center' }}>🔍</span>
        </div>
        <table style={{
          width: '100%',
          background: 'white',
          borderRadius: 10,
          overflow: 'hidden',
          borderCollapse: 'separate',
          borderSpacing: 0,
          boxShadow: '0 2px 8px rgba(100,150,180,0.07)',
        }}>
          <thead>
            <tr style={{ background: '#6b8ca2', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '14px 18px' }}>No. de Horario</th>
              <th>Grupo</th>
              <th>Fecha de creación</th>
              <th>Turno</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map(h => (
              <tr key={h.id} style={{ borderBottom: '1px solid #b2cbe2', color: '#46687c' }}>
                <td style={{ padding: '12px 18px' }}>{h.id}</td>
                <td>{h.grupo}</td>
                <td>{h.fecha}</td>
                <td>
                  <span style={{
                    border: '1px solid #6b8ca2',
                    borderRadius: 16,
                    padding: '2px 14px',
                    fontSize: 13,
                    background: '#e3f0fa',
                  }}>{h.turno}</span>
                </td>
                <td>
                  <span title="Ver" style={{ marginRight: 12, cursor: 'pointer' }}>⏲️</span>
                  <span title="Editar" style={{ marginRight: 12, cursor: 'pointer' }}>✏️</span>
                  <span title="Eliminar" style={{ cursor: 'pointer' }}>🗑️</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    <Footer />
  </div>
);

export default Horario;
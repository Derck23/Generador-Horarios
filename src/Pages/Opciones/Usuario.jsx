import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../Home/Home.css';

const usuarios = [
  { id: 1, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 2, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 3, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 4, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 5, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 6, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 7, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
];

const Usuario = () => (
  <div className="home-page">
    <Navbar active="USUARIOS" />
    <main className="home-main" style={{ alignItems: 'flex-start', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '32px 0 12px 0' }}>
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
              <th style={{ padding: '14px 18px' }}>No. de Usuario</th>
              <th>Email</th>
              <th>Colegio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #b2cbe2', color: '#46687c' }}>
                <td style={{ padding: '12px 18px' }}>{u.id}</td>
                <td>{u.email}</td>
                <td>{u.colegio}</td>
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

export default Usuario;